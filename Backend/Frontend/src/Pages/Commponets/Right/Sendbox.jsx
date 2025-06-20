import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";
import useSendMessage from "../../../Context/useSendMessage.js";

function Sendbox() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    // console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="min-[1700px]:w-[70%] min-[3500px]:w-[80%] z-0 sticky bottom-0 w-full h-[60px] flex justify-center items-center p-5  mx-auto  gap-4">
          <input value={message} onChange={(e) => setMessage(e.target.value)} className='w-full z-0 h-[50px] rounded-xl outline-none bg-white text-black px-2 border border-black' placeholder=' Write a messege..' type="text" />
          <button className='hover:bg-[#6a72822b] p-2 rounded-full text-4xl cursor-pointer text-[#7747ff] font-bold'>
            <VscSend />
          </button>
        </div>
      </form>
    </>
  )
}

export default Sendbox