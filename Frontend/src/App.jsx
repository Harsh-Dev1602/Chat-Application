import React from 'react'
import 'animate.css';
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

import { Navigate,Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={ authUser ? < Navigate to="/Home"/> : <LogIn/>} />
        <Route path="/SignUp" element={authUser ? < Navigate to="/Home"/> :<SignUp />} />
        <Route path="/Home" element={ authUser ? <Home /> : <Navigate to="/" />}/>
      </Routes>
      <Toaster />

    </>
  )
}

export default App