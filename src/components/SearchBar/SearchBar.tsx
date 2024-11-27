import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <InputGroup>
      <Input type="text" placeholder="Buscar producto" bg="white" />
      <InputRightElement pointerEvents="none">
        <IoIosSearch />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
