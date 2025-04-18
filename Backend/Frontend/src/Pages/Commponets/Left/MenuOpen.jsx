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
      <div style={{ minHeight: "100vh" }} className="w-full  bg-white custom-scrollbar ">
        <div style={{ maxHeight: "100vh" }} className="animate__animated animate__fadeInLeft w-full  z-50 lg:mx-0 h-screen  lg:w-[29.9%] text-center fixed top-[65px] py-[100px]  left-0  bg-[#f9f7ff] rounded-t-4xl flex justify-center items-center flex-col gap-5 overflow-y-auto">


          <div className=' rounded-full  p-4 bg-[#cccc]'>
            <FaUserAlt className=' text-[#848484] text-2xl md:text-4xl ' />
          </div>

          <div className=" p-2 rounded-xl bg-[#9f9f9f23] flex flex-col gap-2 ">
            <span className='text-2xl text-[#7747ff] font-semibold 2xl:text-4xl'>{authUser.user.fullname}</span>
          </div>

          <button className=' rounded-sm bg-red-600 py-2 px-4 text-white text-xl shadow shadow-[#ccc] cursor-pointer hover:bg-red-400 transition-all duration-1000'
            onClick={handleLogout}
          >Log Out</button>
        </div>
      </div>
    </>
  )
}

export default MenuOpen