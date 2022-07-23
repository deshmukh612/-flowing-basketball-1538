import React from "react";
import "./Payment3.css";
import "./Muskan.css";

import {
  FormControl,
  FormLabel,
  Select,
  Button,
  // ButtonGroup,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import from "react";

// export const P = () => {
//   const [circle,setCircle] = useState(false);

//   const submitButton = ()=>{
//     setCircle(true);
//   }

export const Payment3 = () => {
  let navigate = useNavigate()
  const [circle, setCircle] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);

  const submitButton = () => {
    setCircle(true);
    navigate('/thankyou')
  };
  return (
    <>
     <div style={{marginTop:"120px"}}></div>
      <div className="maindiv">
        <div className="container">
          <div className="div1">
            <div style={{ margin: "2rem" }}>
              <FormControl>
                <FormLabel > <h1>Item deliverd today</h1>  </FormLabel>
                <div
                  style={{
                    width: "60%",border: "1px solid black"
                  }}
                >
                  <div style={{ margin: "1rem" , border:"1px solid black" , color: "red"}}>
                    <input type="date" />
                  </div>

                  <Select placeholder="Select Delivery" style={{color: "red"}}>
                    <option>11:00am to 3:00 pm</option>
                    <option>3:00 pm to 5:00 pm </option>
                    <option>5:00 pm to 8:00 pm </option>
                    <option>8:00 pm to 10:00 pm</option>
                  </Select>
                </div>
              </FormControl>
            </div>

            <div style={{ display: "flex", margin: "2rem" }}>
              <div style={{}}>
                <img
                  style={{ width: "100px" }}
                  src="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/e8b0900a-4c94-1711-5c1a-6417417b0f00/original/1600541292.3594--2020-09-2000_18_12--738.jpeg"
                ></img>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <p>Premium Chicken Curry Cut</p>
                <p>
                  {" "}
                  <span>450gms</span> <span>Rs. 199</span> <span>Qty: 1</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <Button colorScheme="blue" id="btn" onClick={submitButton}>
                Proceed to Payment
              </Button>
            </div>
          </div>
          <div className="div2">
          {circle ? <div id="circle" style={{backgroundColor:"green"}}>
                
                </div> : <div id="circle" style={{backgroundColor:"green"}}>
                
                </div>} <div className="adress"> Choose adress</div>
                {circle ? <div id="line" style={{backgroundColor:"green"}}>
                
                </div> : <div id="line" style={{backgroundColor:"gray"}}>
                
                </div>} 
                {circle ?<><div id="circle" style={{backgroundColor:"green"}}>
                
                </div> <div className="delivery" style={{color:"black",fontWeight:"bolder"}}>Delivery summary</div></>  : <><div id="circle" style={{backgroundColor:"red"}}>
                
                </div><div className="delivery" >Delivery summary</div></> }
                {circle ? <div id="line" style={{backgroundColor:"green"}}>
                
                </div> : <div id="line" style={{backgroundColor:"gray"}}>
                
                </div>} 
                {circle ?<><div id="circle" style={{backgroundColor:"red"}}>
                
                </div> <div className="delivery" >Payment Method</div></>  : <><div id="circle" style={{backgroundColor:"gray"}}>
                
                </div><div className="delivery" >Payment Method</div></> }
                
          </div>
        </div>
      </div>
    </>
  );
};
