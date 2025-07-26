import React from 'react'

function Masseges({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user.id;

  const chatName = itsMe ? " chat-end" : " chat-start";
  const chatBgColor = itsMe ? "bg-[#d8caff]" : "bg-[#efefeffe]";


  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className={`chat overflow-x-hidden p-4 ${chatName}`}>
        <div className={`chat-bubble text-[#000] text-xl text-justify ${chatBgColor} `}>
          {/* <div className={` ${chatTextColor}`}> */}
            {message.message}
          {/* </div> */}   
        </div>
        <div className=" chat-footer sticky text-xl font-semibold">{formattedTime}</div>
      </div>
   
    </>
  )
}

export default Masseges