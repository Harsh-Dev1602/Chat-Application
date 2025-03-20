import { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuth } from "../../../Context/AuthProvider";

function MenuOpen() {
  const [authUser] = useAuth();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    }
    catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <div className="animate__animated animate__fadeInLeft w-[80%] mx-auto z-50 lg:mx-0 h-screen
                 lg:w-[25%] text-center fixed top-0  left-0 border-r-2 border-[#cccc] bg-white rounded-br-3xl rounded-tr-3xl  py-[50px] flex justify-center items-center flex-col gap-5">

        {/* <h1 className="text-[#7747ff] text-3xl fixed top-5 left-5 font-semibold ">Chat App</h1> */}

        <div className=' rounded-full p-4 bg-[#cccc]'>
          <FaUserAlt className=' text-[#848484] text-2xl md:text-4xl ' />
        </div>

        <div className=" flex flex-col gap-2 ">
          <span className=' text-2xl 2xl:text-4xl'>{authUser.user.fullname}</span>
          <span className=' text-xl text-[#7747ff] font-semibold'>{authUser.user.email}</span>
        </div>

        <button className=' rounded-3xl bg-red-500 py-2 px-8 text-white text-2xl font-bold shadow shadow-[#ccc] cursor-pointer hover:bg-red-400 transition-all duration-1000'
          onClick={handleLogout}
        >Log Out</button>
      </div>
    </>
  )
}

export default MenuOpen