import React, { useEffect, useState } from 'react'
import 'animate.css';
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";
import NotFound from './Pages/NotFound';
import Loading from './Pages/Loading/Loading';



function App() {
  const [authUser, setAuthUser] = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (<>
        <Routes>
          <Route path="/" element={authUser ? < Navigate to="/Home" /> : < LogIn />} />
          <Route path="/SignUp" element={authUser ? < Navigate to="/Home" /> : < SignUp />} />
          <Route path="/Home" element={authUser ? < Home /> : < Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </>
      )
      }
    </>
  )
}

export default App