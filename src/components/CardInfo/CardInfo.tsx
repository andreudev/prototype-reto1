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
import { Meal } from "../../types";

type Props = {
  info: Meal;
};

function CardInfo({ info }: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={info.strMealThumb} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{info.strMeal}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            ratione minus! Tempora, vel. Sint eum porro, cupiditate deleniti
            suscipit voluptate!
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $999
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Card;
