import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from 'react-icons/md';
import MenuOpen from './MenuOpen';
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
            <header className=' sticky bg-white top-0 left-0 w-[95%]  mx-auto py-4'>
                <div className="flex justify-between  items-center">
                    <h1 className="text-[#7747ff] flex justify-center items-center  text-3xl font-semibold "> <img className=' w-10 h-10' src={Logo1} /> I.C.M.</h1>
                    <div onClick={() => setmenuOpen(!menuOpen)} className=' hover:bg-[#cccccc65] p-1 rounded-xl text-4xl cursor-pointer'>
                        {menuOpen ? <MdOutlineClear /> : <LuMenu />}
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