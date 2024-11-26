import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import useHttpData from "../hooks/useHttpData";
import MainContent from "../components/MainContent/MainContent";
import SideNav from "../components/SideNav/SideNav";
import { Product, Category } from "../types";
import useHttpData2 from "../hooks/useHttpData2";
import "./style.css";

function Home() {
  const url = "http://localhost:3000/products";
  const urlCategory = "http://localhost:3000/categories";
  const { data, loading } = useHttpData2<Product>(url);
  const { data: categoryData, loading: categoryLoading } =
    useHttpData2<Category>(urlCategory);
  console.log(categoryData, categoryLoading);
  console.log(data, loading);

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"250px 1fr"}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        bg="orange.300"
        area={"header"}
        position={"sticky"}
        top="0"
        zIndex="sticky"
      >
        <NavBar />
      </GridItem>
      <GridItem
        p="5"
        area={"nav"}
        height="calc(100vh - 50px)"
        position="sticky"
        top="50px"
        left="0"
        overflowY="auto"
      >
        <SideNav data={categoryData} />
      </GridItem>
      <GridItem p={[5, 10]} m={[5, 0]} bg="gray.100" area={"main"}>
        <MainContent data={data} />
      </GridItem>
    </Grid>
  );
}

export default Home;
