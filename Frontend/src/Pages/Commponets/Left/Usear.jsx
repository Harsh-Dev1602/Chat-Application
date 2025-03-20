import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import useConversation from '../../../zustand/useConversation.js';
import { useSocketContext } from '../../../Context/SocketContext.jsx';

function Usear({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);


  return (
    <>
    <div className={`w-[95%] mx-auto transition-all h-20 flex gap-4 items-center hover:bg-[#cccccc1b] duration-300 cursor-pointer
         px-2  border-black  ${isSelected ? "bg-[#cccccc4f]" : ""}`}   onClick={() => setSelectedConversation(user)} >
        <div className=' rounded-full p-4 bg-[#cccc] '>
          <FaUserAlt className=' text-[#848484] text-2xl md:text-3xl ' />
        </div>
        <div className="w-full flex flex-col justify-center ">
          <span className=' text-2xl '>{user.fullname}
          </span>
          <span className=' text-[#7747ff] font-semibold flex justify-between items-center'>
           {
              isOnline ? "Online*":(<div className=' text-[#00000095]'>Offline</div>)
           }
          </span>
        </div>
      </div>

    </>
  )
}

export default Usear