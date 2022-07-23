import React from "react";
import "./Muskan.css";
import {
  FormControl,
  FormLabel,
  Input,
  //   FormErrorMessage,
  FormHelperText,
  Button,
  //   ButtonGroup,
  Stack,
  //   List,
  // ListItem,
  //   ListIcon,
  //   OrderedList,
  // UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Muskan = () => {
  let navigate = useNavigate()
  const [circle,setCircle] = useState(false);

  const submitButton = ()=>{
    setCircle(true);
    navigate("/deliverySummary")
  }

  return (
    <div className="main">
      <div className="Container">
        <div  className="inputdiv">
          <FormControl>
            <h1 id = "add">Add Address Here</h1>
            <FormLabel id="label">Enter Location</FormLabel>
            <Input type="text"  id="inp"/>
            <FormHelperText>flat no./Building name /Street name</FormHelperText>
            <FormLabel id="label">Lendmark(optional)</FormLabel>
            <Input type="text" id="inp" />
            <FormLabel id="label">City</FormLabel>
            <Input type="text" id="inp" />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <FormLabel id="label">Mobile number</FormLabel>
            <Input type="tel" id="inp" />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <FormLabel id="label">Enter Email</FormLabel>
            <Input type="email" id="inp" />
            {/* <FormHelperText>
              We'll never share your contact number anywhere.
            </FormHelperText> */}

            <div>
              <Stack spacing={4} direction="row" align="center">
                <Button colorScheme="red" onClick={submitButton} size="md" className="btn">
                  Proceed to Shipment 
                </Button>
              </Stack>
            </div>
          </FormControl>
        </div>
        <div className="mapdiv">
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            alt="google map"
            id="map"
          />
        </div>
        <div className="slider">
          {/* <UnorderedList>
            <ListItem>Choose Address</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            
          </UnorderedList> */}
          {circle ? <div id="circle" style={{backgroundColor:"green"}}>
                
                </div> : <div id="circle" style={{backgroundColor:"red"}}>
                
                </div>} <small className="adress"> Choose adress</small>
                {circle ? <div id="line" style={{backgroundColor:"green"}}>
                
                </div> : <div id="line" style={{backgroundColor:"gray"}}>
                
                </div>} 
                {circle ?<><div id="circle" style={{backgroundColor:"red"}}>
                
                </div> <div className="delivery" style={{color:"black",fontWeight:"bolder"}}>delivery summary</div></>  : <><div id="circle" style={{backgroundColor:"gray"}}>
                
                </div><div className="delivery" >delivery summary</div></> }
                {circle ? <div id="line" style={{backgroundColor:"green"}}>
                
                </div> : <div id="line" style={{backgroundColor:"gray"}}>
                
                </div>} 
                {circle ?<><div id="circle" style={{backgroundColor:"red"}}>
                
                </div> <div className="delivery" style={{color:"black",fontWeight:"bolder"}}>Payment Method</div></>  : <><div id="circle" style={{backgroundColor:"gray"}}>
                
                </div><div className="delivery" >Payment Method</div></> }
                
        </div>
       
      </div>
    </div>
  );
};
