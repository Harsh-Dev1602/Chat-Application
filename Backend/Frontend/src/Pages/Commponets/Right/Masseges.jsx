import React from 'react'

function Masseges({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user.id;

  const chatName = itsMe ? " chat-end" : " chat-start";
  const chatColor = itsMe ? "bg-[#7747ff]" : "bg-[#00000095]";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className={`chat overflow-x-hidden p-4 ${chatName}`}>
        <div className={`chat-bubble   text-white  text-2xl text-justify ${chatColor} `}>
        {message.message}
        </div>
        <div className=" chat-footer text-xl">{formattedTime}</div>
      </div>
   
    </>
  )
}

export default Masseges