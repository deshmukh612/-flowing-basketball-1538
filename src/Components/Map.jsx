import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Input,
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from '@chakra-ui/icons'
  import navMod from "../Components/navbar.module.css"




const Map = () => {

const [city,setCity]=useState('Banglore')
const [acity,setAcity]=useState('near fdasfasdfasdfasdfasdfasdnew town')
useEffect(()=>{

},[city,acity])


  return (
    <Menu
    backgroundColor={'white'}
    >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
   backgroundColor={'white'}
  >
    <Box fontSize={'12px'} overflow={'hidden'}>{city}</Box>
    <Box fontSize={'16px'} width={'100px'} overflow={'hidden'}>{acity}</Box>
    
  </MenuButton>
  <MenuList

  width={'800px'}
  height={'200px'}
  >
    {/* <MenuItem
    >
        </MenuItem> */}
        <div>
        <Box className={navMod.map_text}>Choose Delivery Location</Box>
            <Input w={'700px'} 
            margin='auto'
            className={navMod.map_input}
            id='map_input'
            onChange={(e)=>{
                let data=e.target.value;
                let bag1=""
                let bag2=""
                let flag=0
                for(let i=0;i<=data.length;i++){
                    if(data[i]==" ")
                    if(flag==0){
                        bag1=bag1+data[i]
                    }
                    else{
                        bag2+=data[i]
                    }
                    setCity(bag1)
                    setAcity(bag2)
                console.log(city,acity)
                }
                
            }}
            />
        </div>
   
  </MenuList>
</Menu>
  )
}

export default Map