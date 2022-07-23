import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../Redux/ProductReducer/action';
import "./Product.css";

const OneFish = ({item}) => {
    const dispatch = useDispatch()
    const { id, image,title,description,wet,qty,price} = item;
    const addToCartHandler = () => {        
        item && dispatch(addProductToCart(item));
      };
  return (
    <div>
        <div className="sinpro" key={id}>
        <Link to={`/fish/${id}`}><img className="proimg" src={image} alt="" />
              <h3 className="prot">{title}</h3>
              <p className="desp">{description}</p>
              <div className="net">
                <p className="prop">{wet}</p>
                <p className="propp">Pieces {qty}</p>
              </div></Link>
              <div className="net">
                <h3 className="proprice"> MRP:₹{price}</h3>
                <button className="addcart" onClick={addToCartHandler}>Add To Cart</button>
              </div>
            </div>
    </div>
  )
}

export default OneFish