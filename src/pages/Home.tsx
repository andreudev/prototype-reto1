import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import MainContent from "../components/MainContent/MainContent";
import SideNav from "../components/SideNav/SideNav";
import { Product, Category } from "../types";
import useHttpData2 from "../hooks/useHttpData2";
import DrawerCarrrito from "../components/DrawerCarrito/DrawerCarrrito";
import React, { useState } from "react";
import "./style.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const urlCategory = "http://localhost:3000/categories";
  const url =
    selectedCategory === ""
      ? "http://localhost:3000/products"
      : `http://localhost:3000/products/filter/categoria?categoria=${selectedCategory}`;
  const { data: categoryData } = useHttpData2<Category>(urlCategory);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { data } = useHttpData2<Product>(url);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Función para agregar un producto al carrito
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id_producto === product.id_producto
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id_producto === product.id_producto
            ? { ...item, stock: item.stock! + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, stock: 1 }];
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id_producto === id ? { ...item, stock: item.stock! - 1 } : item
        )
        .filter((item) => item.stock! > 0)
    );
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={"250px 1fr"}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {/* Header */}
        <GridItem
          bg="#3775B5"
          area={"header"}
          position={"sticky"}
          top="0"
          zIndex="sticky"
        >
          <NavBar openDrawer={onOpen} />
        </GridItem>

        {/* SideNav */}
        <GridItem
          p="5"
          area={"nav"}
          height="calc(100vh - 50px)"
          position="sticky"
          top="50px"
          left="0"
          overflowY="auto"
        >
          <SideNav
            data={categoryData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>

        {/* MainContent */}
        <GridItem p={[5, 10]} m={[5, 0]} bg="gray.100" area={"main"}>
          <MainContent data={data} addToCart={addToCart} />
        </GridItem>
      </Grid>

      {/* Drawer del Carrito */}
      <DrawerCarrrito
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default Home;
