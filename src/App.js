import React from 'react'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/About';
import NicCheck from './pages/nicCheck/NicCheck';
import Navbar from './components/NavBar/NavBar';
import { Route,Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Routes>
        
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      
    </div>
  )
}