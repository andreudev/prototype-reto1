import { Link, Heading, StackDivider, VStack } from "@chakra-ui/react";
import { Category } from "../../types";

type Props = {
  data: Category[];
};

const SideNav = ({ data }: Props) => {
  return (
    <>
      <Heading color="gray.600" fontSize={14} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}
        align="stretch"
      >
        {data.map((category) => (
          <Link
            key={category.id_categoria}
            p={2}
            href="#"
            _hover={{ textDecor: "none", bg: "gray.100" }}
          >
            {category.nombre}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;
