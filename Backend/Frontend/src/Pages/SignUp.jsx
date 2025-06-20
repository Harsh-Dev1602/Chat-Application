import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../Context/AuthProvider.jsx";
import Logo1 from "../../public/Logo1.png" 

function SignUp() {

    const [authUser, setAuthUser] = useAuth();

    const { register, handleSubmit, reset,watch, formState: { errors, isSubmitSuccessful }, } =useForm();

    const password = watch("password");

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);
    
    const onSubmit = async (data) => {
        const userInfo = {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        };
        // console.log(userInfo);
        await axios.post("/api/user/signup", userInfo)
          .then((response) => {
            if (response.data) {
              toast.success("Sign up successfully");
            }
            localStorage.setItem("ChatApp",JSON.stringify(response.data));
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
            <div style={{ minHeight: "100vh" }} className="w-full h-screen BgImg1  bg-white  flex custom-scrollbar justify-center items-center">
                <div style={{ maxHeight: "100vh" }} className=" w-[95%] sm:w-[400px] overflow-y-auto custom-scrollbar relative flex flex-col p-4 rounded-md rounded-bl-3xl rounded-tr-3xl  shadow shadow-violet-600 text-black bg-white animate__animated animate__flipInY">
                    
                
                    <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                        <div className="text-black">
                            <div className="w-15 h-15 mx-auto text-center "><img src={Logo1} /></div> instant<span className='text-[#7747ff]'>Chat</span></div></div>
                    <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Create your New account</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
                        <div className="block relative">
                            <label htmlFor="fullname" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Name</label>
                            <input type="text" {...register("fullname", { required: true })} placeholder=' Please enter a full name..' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px]  ring-gray-900 outline-0" />
                            {errors.fullname && <span className=' text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div className="block relative">
                            <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Email</label>
                            <input {...register("email", { required: true })} type="email" placeholder=' Please enter a email id..'  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px]  ring-gray-900 outline-none" />
                            {errors.email && <span className=' text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div className="block relative">
                            <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Password</label>
                            <input  {...register("password", { required: true })} type="password" placeholder=' Please enter a password..' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px]  ring-gray-900 outline-none" />
                            {errors.password && <span className=' text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div className="block relative">
                            <label htmlFor="confirmPassword" className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2">Confirm Password</label>
                            <input {...register("confirmPassword", {
                                required: true,
                                validate: value => value === password || "The passwords do not match"
                            })} type="password" placeholder=' Please enter a confirm password..'  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] ring-gray-900 outline-none" />
                            {errors.confirmPassword && <span className='text-red-600 font-semibold'>{errors.confirmPassword.message}</span>}
                        </div>

                        <button type="submit" className="bg-[#7341ff] hover:bg-[#7441ff93]  w-max m-auto px-10 py-2.5 rounded text-white text-sm font-bold cursor-pointer"> Sign Up</button>
                    </form>
                    <Link to="/" className="text-sm text-center mt-[1.6rem]">Already have an account <span className="text-sm cursor-pointer font-semibold hover:underline text-[#7747ff]">Log In </span></Link>
                </div>
            </div>
        </>
    )
}

export default SignUp