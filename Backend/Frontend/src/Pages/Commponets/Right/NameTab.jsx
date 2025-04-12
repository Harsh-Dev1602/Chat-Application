import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import useConversation from '../../../zustand/useConversation';
import { useSocketContext } from "../../../Context/SocketContext.jsx";
import { MdKeyboardBackspace } from "react-icons/md";


function NameTab() {

    const { selectedConversation } = useConversation();

    const { onlineUsers } = useSocketContext();
    const getOnlineUsersStatus = (userId) => {
        return onlineUsers.includes(userId) ? "Online*" : (<div className='text-[#00000095]'>Offline</div>);
    };
    return (
        <>
            <div className="w-full h-[90px]  border-[#cccc] border-b-2  sticky top-0 left-0 bg-white flex items-center p-2 gap-4">
                <div onClick={() => window.location.reload()} className="text-3xl p-1 rounded-full text-[#00000095] cursor-pointer">
                <MdKeyboardBackspace />
                </div>
                <div className=' rounded-full p-3 bg-[#cccccca2]'>
                    <FaUserAlt className=' text-[#848484] text-2xl ' />
                </div>
                <div className=" flex flex-col">
                    <span className='text-2xl'>
                        {selectedConversation.fullname}
                    </span>
                    <span className=' text-sm text-[#7747ff] font-bold'>
                        {getOnlineUsersStatus(selectedConversation._id)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default NameTab