import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Demo from './Demo'
import Home from './Home'
import SBCIndevidualPage from './SBCIndevidualPage'
import Products from "../Components/Products"
import SeaAndFish from "../Components/SeaAndFish"
import SuccessPage from './SuccessPage'
import SingleProduct from "./SingleProduct";
import {Muskan} from "../Components/Mic/Muskan"
import {Payment3} from "../Components/Mic/Payment3"
import {Thankyou} from "../Components/Mic/Thankyou"
import Footer from '../Components/Footer'
import Payment from './Payment'




// const MainRoutes = () => {
  // return (
  // <>
    {/* <Navbar/> */}
     {/* <Routes>
            
           <Route path = "/successPage"  element = {<SuccessPage/>}/>
        <Route  path='/' element= {<Home/>} />
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Demo from "./Demo";
import Home from "./Home";
import SBCIndevidualPage from "./SBCIndevidualPage";
import Products from "../Components/Products";
import SeaAndFish from "../Components/SeaAndFish";
 */}



const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/sbArray/:id' element = {<SBCIndevidualPage/>}/> */}
        <Route path="/abc/:id" element={<Demo />} />
        <Route path ="/chicken" element ={<Products/>}/>
        <Route path ="/chicken/:id" element ={<SingleProduct/>}/>
        <Route path ="/fish" element ={<SeaAndFish />}/>
        <Route path ="/fish/:id" element ={<SingleProduct />}/>
        <Route path ="/address" element ={<Muskan />}/>
        <Route path ="/deliverySummary" element ={<Payment3 />}/>
        <Route path ="/payment" element ={<Payment/> }/>
        <Route path ="/thankyou" element ={<Thankyou />}/>
      </Routes>
      <Footer/>
    </>
  );
}


export default MainRoutes
