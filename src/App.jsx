import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Sidebar/>}>
        </Route>
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
