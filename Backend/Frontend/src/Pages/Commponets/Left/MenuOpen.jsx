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
        <div className=" z-50 lg:mx-0 w-[75%] min-[1024px]:w-[22.5%]  min-[1700px]:w-[16%] min-[3500px]:w-[10%]   text-center top-0 left-1 bottom-0  min-[1700px]:left-[15%] min-[3500px]:left-[30%] duration-500   p-1 fixed   bg-[#f9f7ff] rounded-md shadow shadow-[#0000009c] flex justify-center items-center flex-col gap-1 overflow-y-auto">

          <div className=" p-2 flex gap-2 ">
            <span className='text-2xl text-center text-[#7747ff] font-semibold '>{authUser.user.fullname}</span>
          </div>

          <button className=' rounded-full bg-red-600 py-2 px-4 text-white text-xl shadow shadow-[#ccc] cursor-pointer hover:bg-red-200 font-semibold hover:text-[#0000001f] transition-all duration-500'
            onClick={handleLogout}
          >Log Out</button>
        </div>
    </>
  )
}

export default MenuOpen