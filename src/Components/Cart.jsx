import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Input,
  useDisclosure,
  DrawerCloseButton,
  Box,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import navMod from "../Components/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";
import { deleteProductCart } from "../Redux/ProductReducer/action";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  const [amount, setAmount] = useState(0);
  const cart = useSelector((state) => state.reducer.cart);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    console.log("going ", id);
    dispatch(deleteProductCart(id));
  };   

  useEffect(() => {
    if(cart.length){
      const total = cart.reduce((acc, elem) => {
        return acc + (+elem.price)
        
      },0)
      setAmount(total)   
      // console.log(amount)
    }    
    
   
    
  }, [cart.length]);
 
  return (
    <>
      <div onClick={onOpen} className={navMod.Login_pointer}>
        cart
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Order Summery</DrawerHeader>

          <DrawerBody>
            <Box
              bg="#417505"
              color={"white"}
              fontSize="12px"
              padding={"1px"}
              pl="10px"
            >
              <Text>
                Your cart value is less than ₹399 & delivery charge applies
              </Text>
            </Box>
            <Box>
              {cart.length &&
                cart.map((product) => {
                  return (
                    <CartItem
                      key={product.key}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      wet={product.wet}
                      image={product.image}
                      removeProduct={removeProduct}
                    />
                  );
                })}
            </Box>
            <Text mt="10px" mb="10px">
              Stop paying delivery charges. Join Meatopia today!
            </Text>
            <Button
              bg="#ffdc93"
              w="full"
              height={"50px"}
              border="1px solid red"
              borderRadius={"5px"}
            >
              Join Now
            </Button>
            <Box border="1px dotted grey" h="200px" mt="10px">
              <Text>BILL DETAILS</Text>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Subtotal</Text>
              <Text>{amount}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Delivery Charge</Text>
              <Text>0</Text>
              </Flex>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Discount</Text>
              <Text>0</Text>
              </Flex>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3}>
              Total:₹{amount}
            </Button>
            <Button colorScheme="D11243" className={navMod.cart_ptc}>
              Procees to checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;

function CartItem({
  id,
  title,
  wet,
  image,
  description,
  price,
  removeProduct,
}) {
  return (
    <Box
      border={"1px solid gray"}
      ml="200px"
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      mt="1rem"
      w="420px"
    >
      <Box height="90px" border="1px solid red" p={"3px"} pr="10px">
        <Flex direction={"row"} justifyContent="space-between">
          <Box width={"70%"}>
            <Text>{title}</Text>
          </Box>
          <CloseIcon onClick={() => removeProduct(id)}/>
        </Flex>
        <Flex direction={"row"} justifyContent="space-between" mt={"10px"}>
          <Flex direction={"row"}>
            <Box border={"1px solid grey"} borderRadius="5px" fontSize={"sm"}>
              {wet}
            </Box>
            <Box ml="5px" color={"#d11243"} fontSize="sm" fontWeight={600}>
              MRP: ₹{price}
            </Box>
          </Flex>
          <Flex>counter</Flex>
        </Flex>
      </Box>
    </Box>
  );
}
