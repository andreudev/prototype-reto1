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
  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.stock,
    0
  );

  return (
    <>
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
          </DrawerBody>

          <DrawerFooter>
            <Stack direction="column" width="100%">
              <Text fontWeight="bold">
                Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Text>
              <Button
                colorScheme="blue"
                isDisabled={cartItems.length === 0}
                onClick={() => alert("Ir a pagar")}
              >
                Proceder al pago
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cerrar
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerCarrrito;
