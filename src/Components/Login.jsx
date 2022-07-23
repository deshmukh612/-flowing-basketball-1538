import React,{useState,useEffect} from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,

  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react'
import navMod from "../Components/Navbar.module.css"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,

  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


import { useNavigate } from 'react-router-dom'



const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let Navigate=useNavigate()

  const [otp, setOtp] = useState(0)
  let dispalay = ' Proceed via otp'
  if (otp) { dispalay = 'confirm otp' }

  useEffect(() => {
    otprender(otp)
  }, [otp])


  //const car="https://static3.bigstockphoto.com/3/9/2/large1500/293515042.jpg"


  function otprender(otp) {
    if (otp == 1) {
      return <>
        <FormControl id="password">
          <FormLabel >Otp</FormLabel>
          <Input type="number" id='otp_here' />
        </FormControl>
      </>
    }
  }


  return (
    <>
      {/* <Button ref={btnRef} colorScheme='white' color='black' onClick={onOpen} >
         Cart
         </Button> */}
         <div onClick={onOpen} className={navMod.Login_pointer} >
            Login
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
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Login