import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import useConversation from '../../../zustand/useConversation';
import { FaChevronLeft } from "react-icons/fa";
import { useSocketContext } from "../../../Context/SocketContext.jsx";

function NameTab() {

    const {selectedConversation} = useConversation();

    const { onlineUsers } = useSocketContext();
    const getOnlineUsersStatus = (userId) => {
      return onlineUsers.includes(userId) ? "Online*" : (<div className='text-[#00000095]'>Offline</div>);
    };
    return ( 
        <>
            <div className="w-full h-[90px]  border-[#cccc] border-b-2    sticky top-0 left-0 bg-white flex items-center p-2 gap-4">
                <div onClick={()=> window.location.reload()} className="text-3xl text-[#00000095] cursor-pointer"><FaChevronLeft /></div>
                <div className=' rounded-full p-4 bg-[#cccc]'>
                    <FaUserAlt className=' text-[#848484] text-3xl ' />
                </div>
                <div className=" flex flex-col">
                    <span className='text-2xl lg:text-4xl'>
                        {selectedConversation.fullname}
                        </span>
                    <span className=' text-[#7747ff] font-bold'>  
            {getOnlineUsersStatus(selectedConversation._id)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default NameTab