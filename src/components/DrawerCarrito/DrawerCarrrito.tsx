import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { Product } from "../../types"; // Asegúrate de tener el tipo Product definido

type Props = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  cartItems: Product[]; // Lista de productos en el carrito
  removeFromCart: (id: number) => void; // Función para eliminar productos del carrito
};

function DrawerCarrrito({
  isOpen,
  onClose,
  btnRef,
  cartItems,
  removeFromCart,
}: Props) {
  const [isCheckout, setIsCheckout] = useState(false); // Estado para manejar la vista de checkout
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.stock,
    0
  );

  // Maneja el cambio de detalles del usuario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Procesar el pedido
  const handleCheckout = () => {
    alert("Pedido confirmado");
    // Aquí iría la lógica para enviar la orden al backend
    setIsCheckout(false);
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrito de compras</DrawerHeader>

        <DrawerBody>
          {isCheckout ? (
            // Checkout Form
            <Stack spacing={4}>
              <Text fontWeight="bold">Detalles de Envío</Text>
              <Input
                placeholder="Nombre"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Dirección"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
              />
              <Input
                placeholder="Teléfono"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
              />
              <Button colorScheme="green" onClick={handleCheckout}>
                Confirmar Pedido
              </Button>
            </Stack>
          ) : (
            // Carrito de compras
            <Stack spacing={4}>
              {cartItems.length === 0 ? (
                <Text>No tienes productos en el carrito.</Text>
              ) : (
                <Stack spacing={4}>
                  {cartItems.map((item) => (
                    <Stack
                      key={item.id_producto}
                      direction="row"
                      justify="space-between"
                      align="center"
                    >
                      <Stack>
                        <Text fontWeight="bold">{item.nombre}</Text>
                        <Text>Cantidad: {item.stock}</Text>
                        <Text>
                          Precio: $
                          {item.precio
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                      </Stack>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => removeFromCart(item.id_producto)}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
          )}
        </DrawerBody>

        <DrawerFooter>
          <Stack direction="column" width="100%">
            <Text fontWeight="bold">
              Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
            {isCheckout ? (
              <Button colorScheme="green" onClick={handleCheckout}>
                Confirmar Pedido
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                isDisabled={cartItems.length === 0}
                onClick={() => setIsCheckout(true)}
              >
                Proceder al pago
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerCarrrito;
