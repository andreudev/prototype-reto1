import { Link, Heading, StackDivider, VStack } from "@chakra-ui/react";
import { Category } from "../../types";
import "./style.css";

type Props = {
  data: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

const SideNav = ({ data, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <>
      <Heading color="gray.600" fontSize={16} fontWeight={600} mb={4}>
        CATEGORIAS
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}
        align="stretch"
      >
        <Link
          onClick={() => setSelectedCategory("")}
          p={2}
          rounded="md"
          _hover={{ bgColor: "blue.100" }}
          {...(selectedCategory === "" && selectedProps)}
        >
          Todos
        </Link>
        {data.map((category) => (
          <Link
            key={category.id_categoria}
            onClick={() => setSelectedCategory(category.nombre)}
            p={2}
            rounded="md"
            _hover={{ bgColor: "blue.100" }}
            {...(selectedCategory === category.nombre && selectedProps)}
          >
            {category.nombre}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;
