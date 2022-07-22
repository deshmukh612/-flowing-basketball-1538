import { Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Searchbar = () => {
  const Navigate=useNavigate()
  const [svalue,setSvalue]=useState('')
  
  
  useEffect(()=>{

   
    check(svalue)


  },[svalue]);



const check=(svalue)=>{
let bag=svalue.toLowerCase();
console.log('svalue',bag)
  
if(bag=="products"){Navigate('/products')}
if(bag=="chicken"){Navigate('/Chicken')}
if(bag=="sea" || bag=='fish'){Navigate('/seaAndfish')}
if(bag=="id"){Navigate('/products')}
if(bag=="products"){Navigate('/products')}
if(bag=="products"){Navigate('/products')}
if(bag=="products"){Navigate('/products')}







}


 


  return (
    
    <Input placeholder='Search for any delecious product' size='sm' width='350px' onChange={(e)=>{
      setSvalue(e.target.value)
      console.log(svalue)
      
    }}/>

  )
}

export default Searchbar