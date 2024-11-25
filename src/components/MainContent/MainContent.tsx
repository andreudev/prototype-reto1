import { SimpleGrid } from "@chakra-ui/react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type Props = {
  data: Meal[];
};

function MainContent(props: Props) {
  return (
    <SimpleGrid columns={[2, null, 3, null, 5]} spacing="20px">
      {props.data.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
