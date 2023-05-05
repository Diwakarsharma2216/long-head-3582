import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';

const MainRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </div>
  )
}

export default MainRoutes;