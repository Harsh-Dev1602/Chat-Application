import React from 'react'
import Left from './Commponets/Left/Left'
import Right from './Commponets/Right/Right'
import useConversation from '../zustand/useConversation.js';
import { useAuth } from "../Context/AuthProvider.jsx";

function Home() {
 
  const { selectedConversation } = useConversation();

  return (
    <>
      <div style={{ minHeight: "100vh" }} className={` lg:flex h-screen bg-white  text-black mx-auto `}>
        <Left/>{selectedConversation?<Right/>:<NoChat />}
        </div>
    </>
  )
}
export default Home


const NoChat = () => {
  const [authUser] = useAuth();
  return (
    <div className=" hidden lg:flex lg:w-[70%]   h-screen text-xl flex-col justify-center items-center">
      <div>Welcome back to Chat App</div>
      <div>Plese start the conversation <span className=' text-2xl text-[#7747ff] font-semibold'>{authUser.user.fullname}</span></div>
    </div>
  );
}

