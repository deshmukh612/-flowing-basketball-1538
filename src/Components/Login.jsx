import React, { useEffect, useState } from 'react'
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
        // styles={{ backgroundImage:`url(${car})` }}
        size='sm'
        
      >
        <DrawerOverlay
          
        />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody
                    className={navMod.login_back_img}

          >
            {/* boby of function */}
            <div>
              <Flex
                minH={'50vh'}
                W={'80px'}
                marginTop={'60%'}
                borderRadius={'5%'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>

                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} W={'lg'}>

                  <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    W={'500px'}
                    p={8}>
                    <Stack spacing={4}>
                      <Heading align={'center'} fontSize={'xl'}>Sign in/Sign up</Heading>
                      <FormControl id="email">
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="number" id='email' />
                      </FormControl>
                      {
                        otprender(otp)
                      }

                      <Stack spacing={10}>
                        <Stack
                          direction={{ base: 'column', sm: 'row' }}
                          align={'start'}
                          justify={'space-between'}>


                        </Stack>
                        <Button
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                          }}

                          onClick={() => {
                            let email = document.getElementById('email').value.length

                            if ((email == 10 || email == 12) && otp==0 ) {setOtp(1) }
                              else if(otp==1)  {
                               let otp_here = document.getElementById('otp_here')
                               console.log(otp_here)
                                  if (otp_here) {
                                    localStorage.setItem("login_flowring_basket",1)
                                  onClose()
                                  Navigate('/')
                                  
                                }
                              }
                              return 1;

                            

                          }}


                        >
                          {dispalay}

                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>



            </div>
          </DrawerBody>

          {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}














export default Login



