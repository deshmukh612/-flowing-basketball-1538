import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Demo from './demo'
import Home from './Home'
import SBCIndevidualPage from './SBCIndevidualPage'

const MainRoutes = () => {
  return (
    
     <Routes>

        <Route  path='/' element= {<Home/>} />
        {/* <Route path='/sbArray/:id' element = {<SBCIndevidualPage/>}/> */}
        <Route  path='/abc/:id' element= {<Demo/>}/>
     </Routes>

  )
}

export default MainRoutes
