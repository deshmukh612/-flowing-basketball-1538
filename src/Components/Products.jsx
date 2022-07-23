import React, { useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/ProductReducer/action";
import OneProduct from "./OneProduct";
import FilterChicken from "./FilterChicken";

const Products = () => {
  
  const chicken = useSelector((state) => state.reducer.chicken);
  
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (chicken.length === 0  || location.search ) {    

      const getShoesParams = {
        params: {
          category: searchParams.getAll("category")
      
        },
      };

      dispatch(getBooks("chicken",getShoesParams));
    }
  }, [location.search]);

  
  return (
    <div >
      <h1 className="head">Chicken</h1>
      <hr width="100%" 
        size="10" 
        margin-left="180px"
        align="center" 
        color="grey" ></hr>
      <FilterChicken />
      <hr width="100%" 
        size="10" 
        align="center" 
        color="grey" ></hr>
      <div className="pro">
        {chicken.map((item) => {
          return (
            <div key={item.id}>
            
              <OneProduct item={item}/>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
