import { StarIcon } from '@chakra-ui/icons'
import { Grid ,GridItem,Box,Image,Badge} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'

import sbCate from "../Components/shopByCate.module.css"
import { getShopByCategory } from '../Redux/HomeReducer/action'
import {Link } from "react-router-dom"
import { useMediaQuery } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {

  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const ShopByCate = ({h2tag}) => {

    const sbArray = useSelector((state)=> state.homeReducer.sbArray)
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    console.log(isLargerThan1280)
    const dispatch = useDispatch()
  
   
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }


      useEffect(()=>{
        if(sbArray.length === 0){

            dispatch(getShopByCategory())


        }

      },[])

      console.log(sbArray)
  return (
    <>
    <div className={sbCate.mainDiv}>
        <h2>{h2tag}</h2>
        <span>Freshest meats just for you</span>
       
        <Grid className={sbCate.col} 
        // border ="2px solid black" 
          // templateColumns='repeat(4, 1fr)'  
          templateColumns={
            {
              base: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
              '2xl': 'repeat(4, 1fr)',
          }   
          //  {{ base: '24px', md: '40px', lg: '56px' }}
        }
          gap={6}>


  {
    sbArray.map((el)=>{


        return (
            <>
  
 
  <div key={el.id}  className={sbCate.gridDiv}>

  {/* <Link to={`/todo/${todo.id}`}>
                <div> {todo.value}</div>
              </Link> */}


  {/* <RouterLink to={`/sbArray/${el.id}`}> */}

<Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>

   <Link  to={`/abc/${el.id}`}>  <Image key={el.id} src={el.img} alt={property.imageAlt} /></Link> 

      <Box  p='6'> 
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
         
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {el.name}
        </Box>

       
      </Box>
    </Box>
    {/* </RouterLink>   */}
    </div>    
       
            
            
            </>


        )
    })
  }
       
 
</Grid>
      
    </div>
    </>
  )
}

export default ShopByCate
