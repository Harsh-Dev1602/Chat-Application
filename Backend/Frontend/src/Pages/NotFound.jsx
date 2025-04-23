import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="BgImg1 w-full text-xl flex justify-center items-center  h-screen p-5">
      <div className=" p-10 rounded-2xl flex justify-center bg-[#ffffffc8] text-black items-center  gap-5 flex-col">
        <h1 className=" text-6xl">404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link className="border border-[#ccc] rounded-full px-5 py-2 text-blue-700 font-semibold duration-200 hover:font-bold hover:underline " to="/">Go back home</Link>
      </div>
    </div>
  );
}

export default NotFound;