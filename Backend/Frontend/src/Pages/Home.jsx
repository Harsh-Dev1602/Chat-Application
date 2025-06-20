import React from 'react'
import Left from './Commponets/Left/Left'
import Right from './Commponets/Right/Right'
import useConversation from '../zustand/useConversation.js';
import { useAuth } from "../Context/AuthProvider.jsx";
import Logo1 from "../../public/Logo1.png"

function Home() {

  const { selectedConversation } = useConversation();

  return (
    <>
      <div className=' min-[1700px]:w-[70%] min-[3500px]:w-[40%] mx-auto' style={{ maxHeight: "100vh" }}>
        <div style={{ minHeight: "100vh" }} className=" lg:flex h-screen bg-transparent  text-black  overflow-hidden mx-auto  ">
          <Left />{selectedConversation ? <Right /> : <NoChat />}
        </div>
      </div>
    </>
  )
}
export default Home


const NoChat = () => {
  const [authUser] = useAuth();
  return (
    <div className="BgImg1 hidden lg:flex lg:w-[70%]   h-screen text-xl flex-col justify-center items-center">
      <div className=" w-40  bg-white p-2 rounded-4xl "><img src={Logo1} /></div>
      <div className='bg-sky-100 p-2 rounded-3xl' >Welcome back, <span className=' text-2xl text-[#7747ff] font-semibold'>{authUser.user.fullname} !</span></div>
      <span className=' bg-sky-100 mt-2 p-2 rounded-3xl' >We missed you. Ready to continue where you left off?</span>
    </div>
  );
}

