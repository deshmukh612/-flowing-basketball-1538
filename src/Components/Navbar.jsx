import React from 'react'
import { Link } from 'react-router-dom'
import navMod from "../Components/navbar.module.css"
import Cart from './Cart'
import Login from './Login'


const Navbar = () => {
    return (
        <div className={navMod.navbarL}>
            <div className={navMod.nav_div1}>

                <div><Link to='./'>
                    <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                    </Link>
                </div>
                <div>
                    
                        <div><img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="" /></div>
                        <div>Search</div>

                </div>
                <div>Searchbar</div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" /></div>
                        <div>Catagory</div>
                    
                </div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /></div>
                        <div><Login/></div>
                    
                </div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" /></div>
                        <div><Cart/></div>
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar