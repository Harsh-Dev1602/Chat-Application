import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";
import useSendMessage from "../../../Context/useSendMessage.js";

function Sendbox() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" sticky bottom-0 w-full h-[90px] flex justify-center items-center p-5  mx-auto bg-white gap-4">
          <input value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-15 rounded-md outline-none bg-white text-black px-2 border border-black' placeholder=' Write a messege..' type="text" />
          <button className='hover:bg-[#6a72822b] p-1 rounded-md text-4xl cursor-pointer text-[#7747ff] font-bold'>
            <VscSend />
          </button>
        </div>
      </form>
    </>
  )
}

export default Sendbox