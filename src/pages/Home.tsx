import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import useHttpData from "../hooks/useHttpData";
import MainContent from "../components/MainContent/MainContent";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Home() {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  const { data, loading } = useHttpData<Meal>(url);

  console.log(data, loading);

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                   "footer footer"`}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"250px 1fr"}
      h="300px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem
        p="5"
        area={"nav"}
        height="calc(100vh - 60px)"
        position="sticky"
        top="60px"
        left="0"
        overflowY="auto"
      >
        Nav
      </GridItem>
      <GridItem p="4" bg="gray.100" area={"main"}>
        <MainContent data={data} />
      </GridItem>
    </Grid>
  );
}

export default Home;
