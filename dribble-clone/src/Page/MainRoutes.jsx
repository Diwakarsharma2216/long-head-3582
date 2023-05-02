import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'

const MainRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
    </Routes>
    </div>
  )
}

export default MainRoutes
