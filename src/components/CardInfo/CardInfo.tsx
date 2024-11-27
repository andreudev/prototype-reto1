import {
  CardBody,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Product } from "../../types";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import "./style.css";

type Props = {
  info: Product;
  addToCart: (product: Product) => void;
};

function CardInfo({ info, addToCart }: Props) {
  return (
    <Card maxW="sm" w="450px" h="auto">
      {" "}
      {/* Dimensiones fijas para las tarjetas */}
      <CardBody p={0}>
        {" "}
        {/* Elimina el padding para evitar bordes indeseados */}
        <Image
          src={info.url}
          fallbackSrc="https://via.placeholder.com/150"
          w="100%"
          h="200px"
          objectFit="cover"
          borderTopRadius="lg"
          _hover={{ opacity: "0.8", transition: "0.3s", cursor: "pointer" }}
        />
        <Stack mt="4" spacing="3" p="4">
          {" "}
          {/* Padding interno para el contenido */}
          <Heading fontSize={20} fontWeight={500}>
            {info.nombre}
          </Heading>
          <Text noOfLines={4} fontSize={15} fontWeight={400}>
            {info.descripcion}
          </Text>
          <Text color="#3775B5" fontSize="2xl" fontWeight={400}>
            $ {info.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Text>
        </Stack>
        <Stack
          direction="row"
          justify="space-between"
          p="0px 16px" // Padding horizontal de 1 y vertical de 4
          m={[0]}
        >
          <Button
            leftIcon={<FaRegHeart />}
            colorScheme="pink"
            variant="outline"
            size="sm"
            fontWeight={400}
          >
            Agregar a favoritos
          </Button>
          <Button
            leftIcon={<FaRegCommentAlt />}
            colorScheme="blue"
            variant="outline"
            size="sm"
            fontWeight={400}
          >
            Comentarios
          </Button>
        </Stack>
        <Stack direction="row" justify="space-between" p="16px 16px 10px">
          <Text color="gray.500" fontSize="sm" fontWeight={500}>
            Envío gratis
          </Text>
          <Text color="gray.500" fontSize="sm" fontWeight={500}>
            3 cuotas sin interés
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" bgColor="#3775B5">
            Comprar
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            color="#3775B5 "
            onClick={() => addToCart(info)}
          >
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardInfo;
