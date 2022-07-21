import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../Redux/ProductReducer/action";
const Products = () => {
  const dispatch = useDispatch();
  const Shoes = useSelector((state) => state.reducer.chicken);

  const get = () => {
    dispatch(getShoesRequest());
    axios
      .get("/chicken")
      .then((r) => dispatch(getShoesSuccess(r.data)))
      .catch((e) => dispatch(getShoesFailure(e)));
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      

        <div className="prosort">
             <div className="label">
                <label htmlFor="">All</label>
             <input type="checkbox" />
             </div>
             <div  className="label">
                <label htmlFor="">Curry Cut</label>
             <input type="checkbox" />
             </div>
             <div  className="label">
                <label htmlFor="">Boneless & Mince</label>
             <input type="checkbox" />
             </div>
        </div>
         <div className="pro">
      {
        Shoes.map((e)=>{
            return (
                <div className="sinpro">
            <img   className="proimg" src={e.image} alt="" />
           <h3 className="prot">{e.title}</h3>
          <p className="desp">{e.description}</p>
          <div className="net">
            <p className="prop"  >{e.wet}</p>
            <p className="propp" >Pieces {e.qty}</p>
          </div>
           <div className="net">
            <h3 className="proprice"> MRP:${e.price}</h3>
            <button className="addcart">Add To Cart</button>
           </div>
        </div>
            )
        })
      }
     </div>
    </div>
  );
};

export default Products;
