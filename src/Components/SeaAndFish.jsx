import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getBooks } from "../Redux/ProductReducer/action";
import OneFish from "./OneFish";
import FilterFish from "./FilterFish";
import { useLocation, useSearchParams } from "react-router-dom";

const SeaAndFish = () => {
  const dispatch = useDispatch();
  const fish = useSelector((state) => state.reducer.fish);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (fish.length === 0  || location.search ) {    

      const getShoesParams = {
        params: {
          category: searchParams.getAll("category")
      
        },
      };

      dispatch(getBooks("fish",getShoesParams));
    }
  }, [location.search]);

  // useEffect(() => {
  //   if (fish.length === 0  || location.search ) {    

  //     const getShoesParams = {
  //       params: {
  //         category: searchParams.getAll("category")
      
  //       },
  //     };

  //     dispatch(getBooks("fish",getShoesParams));
  //   }
  // }, [location.search]);
  

  return (
    <div>
      <h1 className="head">Fish</h1>
      <hr width="100%" 
        size="10" 
        margin-left="180px"
        align="center" 
        color="grey" ></hr>
      <FilterFish />
      <hr width="100%" 
        size="10" 
        align="center" 
        color="grey" ></hr>
      <div className="pro">
        {fish.map((item) => {
          return (
            <div key={item.id}>
              <OneFish item={item}/>
            </div>            
          );
        })}
      </div>
    </div>
  );
};

export default SeaAndFish;
