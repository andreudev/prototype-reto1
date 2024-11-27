import React, { useState } from "react";
import { Button, Input, Stack, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router"; // Para navegar a otra página después de la compra
import { Product } from "../types";

type CheckoutProps = {
  cartItems: Product[]; // Los productos del carrito
};

const Checkout = ({ cartItems }: CheckoutProps) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.stock,
    0
  );

  // Manejar el cambio de detalles del usuario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Confirmar el pedido
  const handleConfirmOrder = () => {
    // Lógica de backend para enviar la orden, por ejemplo:
    alert("Pedido confirmado");
    setOrderConfirmed(true);

    // Redirigir al usuario a la página principal después de la compra
    navigate("/");
  };

  return (
    <Box p={5}>
      <Stack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Detalles de Envío
        </Text>
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

        <Text fontSize="lg" fontWeight="bold">
          Total: ${total.toFixed(2)}
        </Text>

        <Button colorScheme="green" onClick={handleConfirmOrder}>
          Confirmar Pedido
        </Button>

        {orderConfirmed && (
          <Text color="green.500" fontWeight="bold">
            ¡Pedido Confirmado! Gracias por tu compra.
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default Checkout;
