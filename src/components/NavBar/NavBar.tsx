import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import "./styles.css";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../images/logo.svg";

type Props = {
  openDrawer: () => void;
};

const NavBar = ({ openDrawer }: Props) => {
  return (
    <Grid
      templateRows="1fr"
      templateColumns="1fr 3fr 2fr"
      gap={1}
      className="container"
    >
      <GridItem colSpan={1} className="grid-item" textAlign="center">
        <Image src={Logo} alt="logo" h={50} p={1} />
      </GridItem>
      <GridItem
        colSpan={1}
        className="grid-item"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SearchBar />
      </GridItem>
      <GridItem
        colSpan={1}
        className="grid-item"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ul className="list">
          <li>Crear Cuenta</li>
          <li>Ingresar</li>
          <Button onClick={openDrawer}>Carrito</Button>
        </ul>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
