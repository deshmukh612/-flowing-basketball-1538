import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import cartget from "../Pages/cartget.jpg"
import delivary from "../Pages/delivary.jpg"
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProductToCart, getBooks } from "../Redux/ProductReducer/action";

export default function SingleProduct() {
  const dispatch = useDispatch();
  // const id = 1;
    const {id} = useParams()
  const [currentProduct, setCurrentProduct] = useState({
    
  });
  const chicken = useSelector((state) => state.reducer.chicken);

  useEffect(() => {
    if (chicken.length === 0) {
      // let cat = chicken;
      dispatch(getBooks(`/cat/${id}`))
    }
  }, [chicken?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = chicken.find((item) => item.id === Number(id));
      //   console.log(temp)
      temp && setCurrentProduct(temp);
    }
  }, [chicken, id]);

  const addToCartHandler = () => {
    currentProduct && dispatch(addProductToCart(currentProduct));
  };
  console.log(chicken);
  console.log(currentProduct);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={currentProduct.image}
            fit={"contain"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} mt="2.5rem">
          <Box as={"header"} textAlign="left">
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
            >
              {currentProduct.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={200}
              fontSize={"md"}
            >
              MRP:₹{currentProduct.price}
            </Text>
            <Divider color="black" />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }} textAlign="left">
              <Text
                fontSize={"md"}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                {currentProduct.description}
              </Text>
              <Text
                fontSize={"md"}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                Licious Chicken Curry Cut is a mix of bone-in, small pieces of
                breast, wing (without the tip), leg and thigh meat, enough to
                feed a small to medium-sized family. This Small pack consists of
                13-16 pieces of smaller cuts of chicken, for when you are making
                a smaller portion of curry or looking to reduce cooking time.
                Smaller pieces of chicken cook faster because of the higher
                surface-to-volume ratio.
              </Text>
              <Text
                fontSize={"md"}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                These pieces remain juicy and turn tender once cooked. Make
                Andhra Style Chicken Curry, Dhaba Style Chicken Curry, Mughlai
                Chicken Curry and more with Licious Chicken Curry Cut (Small).
              </Text>
            </VStack>
            <Box
              border="1px solid grey"
              height="100px"
              borderRadius={"5px"}
              padding="20px"
            >
              <Flex justifyContent={"space-between"}>
                <Text>No. of Pieces:14-16</Text>
                <Text>Serve 4</Text>
              </Flex>
              <Divider margin={"5px"} />
              <Flex justifyContent={"space-between"}>
                <Text>Gross Wt. 526gms</Text>
                <Text>Net wt. 500gms</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text
                  color="
              #d11243"
                  fontWeight={700}
                  fontSize={"xl"}
                >
                  {currentProduct.price}
                </Text>
                <Button
                  w="120px"
                  size={"sm"}
                  bg="
            #d11243"
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text color="#d11243"> Only the Safest Chicken!</Text>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"left"}
                >
                  <MdLocalShipping />

                  <Text>Today 08 AM - 11 AM</Text>
                </Stack>
              </Flex>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Box boxSize="full" border="1px solid grey">
        <Image src={cartget} alt="Dan Abramov" size="full" />
      </Box>
      <Box boxSize="full" border="1px solid grey">
        <Image src={delivary} alt="Dan Abramov" size="full" />
      </Box>
    </Container>
  );
}
