import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from'./component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Admin from './component/Admin'
import Profile from './component/Profile'
import './App.css'

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">

    <BrowserRouter>

    <Routes>
          <Route path="/Admin" element= {<Admin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
    </Routes>

    <nav>
        <NavLink to ={"/Home"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/Profile/265"}>Profile</NavLink>
        <NavLink to={"/Admin"}>For Admin!!</NavLink>
    </nav>

    </BrowserRouter>

    </div>
  )
}

export default App

//Created: Thursday, 30 March BE 2566 11:34
//Modified: Thursday, 6 April BE 2566 05:07
