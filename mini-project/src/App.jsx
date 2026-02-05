import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListItem from './components/ListItem'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import About from './pages/About'
import ItemDetails from './pages/ItemDetails'


function App() {
 
  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/itemDetails/:itemId' element={<ItemDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      {/*<ListItem/>*/} 
    </>
  )
}

export default App
