import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../Context/AuthProvider";
import Logo1 from "../../public/Logo1.png"

function LogIn() {

  const [authUser, setAuthUser] = useAuth();

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, } = useForm()
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    axios.post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successfully");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return ( 
    <>
      <div style={{ minHeight: "100vh" }} className="w-full h-screen  bg-white BgImg1 custom-scrollbar flex justify-center items-center">
        <div style={{ maxHeight: "100vh" }} className="w-[95%] sm:w-[400px] overflow-y-auto custom-scrollbar relative flex flex-col p-4 rounded-md rounded-bl-3xl rounded-tr-3xl  text-black shadow-md shadow-violet-600 bg-white  animate__animated animate__flipInY">
          <div className="w-15 h-15 mx-auto text-center"><img src={Logo1} /></div>
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center ">Welcome back to <div className="flex justify-center"> <h1 className=' text-black'>instant</h1><span className="text-[#7747ff]"> Chat</span></div></div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

            <div className="block relative">
              <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Email</label>
              <input type="email" {...register("email", { required: true })} placeholder=' Please enter a email id..' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px]  ring-gray-900 outline-none" />
              {errors.email && <span className=' text-red-600 font-semibold'>This field is required</span>}

            </div>
            <div className="block relative">
              <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Password</label>
              <input type="password" {...register("password", { required: true })} placeholder=' Please enter a password..' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px]  ring-gray-900 outline-none" />
              {errors.password && <span className=' text-red-600 font-semibold'>This field is required</span>}
            </div>
            {/* <div>
                            <a className="text-sm text-[#7747ff] hover:underline" href="#">Forgot your password?
                            </a>
                        </div> */}
            <button type="submit" className="bg-[#7341ff] hover:bg-[#7441ff93]  w-max m-auto px-10 py-2.5 rounded text-white text-sm font-bold cursor-pointer">Log In</button>
          </form>
          <Link to="/SignUp" className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <span className="text-sm cursor-pointer font-semibold hover:underline text-[#7747ff]">Sign up for free!</span></Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
