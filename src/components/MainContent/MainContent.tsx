import { SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../CardInfo/CardInfo";
import { Product } from "../../types";

type Props = {
  data: Product[];
  addToCart: (product: Product) => void;
};

function MainContent({ data, addToCart }: Props) {
  return (
    <SimpleGrid
      columns={[1, 1, 1, 1, 2]}
      spacingY={10}
      justifyContent="center"
      justifyItems="center" // Centra los elementos horizontalmente
      alignItems="center" // Centra los elementos verticalmente
      alignContent="center" // Asegura el alineamiento general
      p={4} // Espaciado interno para separación visual
    >
      {data.map((product) => (
        <CardInfo
          key={product.id_producto}
          info={product}
          addToCart={addToCart}
        />
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
