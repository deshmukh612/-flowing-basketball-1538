import React, { useState } from 'react'
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
  } from '@chakra-ui/react'
  import navMod from "../Components/navbar.module.css"





   const Cart=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [amount,setAmount]=useState('000')

    return (
      <>
        {/* <Button ref={btnRef} colorScheme='white' color='black' onClick={onOpen} >
         Cart
         </Button> */}
         <div onClick={onOpen} className={navMod.Login_pointer}>
            cart
         </div>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
  
            <DrawerBody>
{/* //body */}
           
           
           
           
           
           
           
           
            </DrawerBody>
  
           <DrawerFooter>
            
              <Button  variant='outline' mr={3}>Total:₹{amount}</Button>
              <Button colorScheme='D11243' className={navMod.cart_ptc}>Procees to checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Cart

    {/* <Button variant='outline' mr={3} onClick={onClose}>Cancel
              </Button> */}