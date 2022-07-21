import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Demo from './Demo'
import Home from './Home'
import SBCIndevidualPage from './SBCIndevidualPage'
import Products from "../Components/Products"
import SeaAndFish from "../Components/SeaAndFish"
import SuccessPage from './SuccessPage'
const MainRoutes = () => {
  return (<>
    {/* <Navbar/> */}
     <Routes>
            
           <Route path = "/successPage"  element = {<SuccessPage/>}/>
        <Route  path='/' element= {<Home/>} />
        {/* <Route path='/sbArray/:id' element = {<SBCIndevidualPage/>}/> */}
        <Route  path='/abc/:id' element= {<Demo />}/>
        <Route  path='/products' element= {<Products />}/>
        <Route  path='/seaAndfish' element= {<SeaAndFish />}/>
     </Routes>
     </>

  )
}

export default MainRoutes
