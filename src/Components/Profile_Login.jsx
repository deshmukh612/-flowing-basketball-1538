import React, { useEffect, useState } from 'react'
import Login from './Login'
import Profile from './Profile'

const Profile_Login = () => {
    const [login,setLogin]=useState(1)
    localStorage.setItem('login_flowring_basket',0)
    function check(){
    setLogin(localStorage.getItem('login_flowring_basket') || setLogin(0))

    }

 useEffect(()=>{
    check()
 },[login])
 
   
//if 0 login
//else profile

  return (
    
        <div> {login==0 ? <Login/> : <Profile/> } </div>
        

  )
}

export default Profile_Login

