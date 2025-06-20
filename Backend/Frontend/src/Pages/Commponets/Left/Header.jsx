import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import MenuOpen from './MenuOpen';
import { FaUserAlt } from "react-icons/fa";
import useGetAllUsers from "../../../Context/useGetAllUsers.jsx";
import useConversation from "../../../zustand/useConversation.js";
import toast from "react-hot-toast";
import Logo1 from "../../../../public/Logo1.png"
function Header() {
    const [menuOpen, setmenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [allUsers] = useGetAllUsers();
    const { setSelectedConversation } = useConversation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = allUsers.find((user) =>
            user.fullname?.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("User not found");
            setSearch("");
        }
    };
    return (
        <>
            <header className=' sticky top-0 left-0 w-[95%]  mx-auto py-4'>
                <div className="flex justify-between  items-center">
                    <h1 className="text-black flex justify-center items-center  text-3xl font-semibold "> <img className=' w-10 h-10' src={Logo1} /> 
                    instant<span className='text-[#7747ff]'>Chat</span></h1>
                    <div onClick={() => setmenuOpen(!menuOpen)} className=' p-2 rounded-full text-3xl cursor-pointer'>
                        {menuOpen ? <> <FaUserAlt/>  <div className="fixed top-0 left-0 w-full   z-100 h-screen bg-transparent"></div> </> :  <FaUserAlt/> }
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className=" mt-2 h-15 bg-[#cccccc24] p-2 flex justify-center items-center rounded-md ">
                        <input type="text" className='w-full h-full   text-black outline-none  text-xl  ' placeholder=' Search..' value={search}
                            onChange={(e) => setSearch(e.target.value)} />

                        <FaSearch className='text-3xl text-black cursor-pointer' />
                    </div>
                </form>
            </header>
            {menuOpen && (
                <MenuOpen />
            )}
        </>
    )
}

export default Header