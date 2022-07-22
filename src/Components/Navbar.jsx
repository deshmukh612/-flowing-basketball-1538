import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navMod from "../Components/navbar.module.css"
import Cart from './Cart'
import CartCounter from './CartCounter'
import Categories from './Categories'
import Login from './Login'
import Searchbar from './Searchbar'
import Map from './Map'
import Profile_Login from './Profile_Login'


const Navbar = () => {

    const [value , setValue] = useState(false)

  
    return (
        <div className={navMod.navbarL}>
            <div className={navMod.nav_div1}>

                <div><Link to='./'>
                    <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                    </Link>
                </div>
                <div>
                    
                        <div><img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="" /></div>
                        <div><Map/></div>

                </div>
                <div><Searchbar/></div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" /></div>
                        <div><Categories/></div>
                    
                </div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /></div>
                        <div><Profile_Login/></div>
                    
                </div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" /></div>
                        <div><Cart/></div>
                        <div><CartCounter /></div>
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar