import { useNavigate } from "react-router";

export const Thankyou = ()=>{
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/")
    }, 12000);
    return(
        <>
        <div style={{marginTop:"100px"}}></div>
        <center>
            <img src="https://th.bing.com/th/id/OIP.5t9fwdg9viS7-LqmHtHdvAAAAA?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        </center>
        <center><h1 style={{margin:"auto"}}> Your order has been placed..........</h1></center>
        
        </>
    )
}


