import React from 'react'
import { Link } from 'react-router-dom'
import navMod from "../Components/Navbar.module.css"
import Cart from './Cart'
import CartCounter from './CartCounter'
import Login from './Login'
import Map from './Map'
import Categories from './Categories'


const Navbar = () => {
    return (
        <div className={navMod.navbarL} >
            <div className={navMod.nav_div1}>

                <div><Link to='./'>
                    <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                    </Link>
                </div>
                <div>
                    
                        <div className={navMod.map_img_margin}><img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="" /></div>
                        <div><Map/></div>

                </div>
                <div>Searchbar</div>
                <div>
                
                        <div className={navMod.map_img_margin}><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" /></div>
                        <div><Categories/></div>
                    
                </div>
                <div>
                
                        <div><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /></div>
                        <div><Login/></div>
                    
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