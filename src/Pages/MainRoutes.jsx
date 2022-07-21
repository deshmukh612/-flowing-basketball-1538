import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Demo from "./Demo";
import Home from "./Home";
import SBCIndevidualPage from "./SBCIndevidualPage";
import Products from "../Components/Products";
import SeaAndFish from "../Components/SeaAndFish";
import SingleProduct from "./SingleProduct";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/sbArray/:id' element = {<SBCIndevidualPage/>}/> */}
        <Route path="/abc/:id" element={<Demo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/seaAndfish" element={<SeaAndFish />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
