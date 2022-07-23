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
  import navMod from "../Components/Navbar.module.css"



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
            <Input w={'600px'} 
            ml='100px'
            mt='50px'
            placeholder='Enter Your Adress'
            
            className={navMod.map_input}
            id='map_input'
            onChange={(e)=>{
                let data=e.target.value;
                console.log(data)
                let bag1=""
                let bag2=""
                let bag1_=""
                let _bag1
                let flag=0
                for(let i=0;i<=data.length;i++){
                    if(data[i]==" "){
                        flag=1
                    }
                    if(flag==0){
                        bag1=bag1+data[i]
                    }
                    else{
                        bag2=bag2+=data[i]
                    }
                    if(bag1.length>10){
                        for(let b=0;b<bag1.length;b++){
                            if(b<bag1.length-9){bag1_+=bag1[b]}
                            else{_bag1+=bag1[b]}
                        }
                        if(_bag1=='undefined'){
                            setCity(bag1_)
                        }
                        else{
                            setCity(bag1)
                        }
                    }
                    //two
                    if(bag2.length>10){
                        for(let b=0;b<bag2.length;b++){
                            if(b<bag2.length-9){bag1_+=bag2[b]}
                            else{_bag1+=bag2[b]}
                        }
                        if(_bag1=='undefined'){
                            setAcity(bag1_)
                        }
                        else{
                            setAcity(bag1)
                        }
                    }
                    
                    
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