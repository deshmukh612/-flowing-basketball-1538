import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Demo from './Demo'
import Home from './Home'
import SBCIndevidualPage from './SBCIndevidualPage'

const MainRoutes = () => {
  return (<>
    <Navbar/>
     <Routes>

        <Route  path='/' element= {<Home/>} />
        {/* <Route path='/sbArray/:id' element = {<SBCIndevidualPage/>}/> */}
        <Route  path='/abc/:id' element= {<Demo />}/>
     </Routes>
     </>

  )
}

export default MainRoutes
