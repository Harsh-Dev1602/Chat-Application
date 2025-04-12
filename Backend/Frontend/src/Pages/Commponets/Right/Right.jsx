import React, { useEffect, useRef } from 'react'
import NameTab from './NameTab'
import Sendbox from './Sendbox'
import Masseges from './Masseges'
import useGetMessage from "../../../Context/useGetMessage.js";
import Loading from "../../Loading/Loading1.jsx";
import { useAuth } from "../../../Context/AuthProvider";
import useGetSocketMessage from '../../../Context/useGetSocketMessage.js';
import useConversation from '../../../zustand/useConversation.js';

function Right({ user }) {
  const [authUser] = useAuth();
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); // listing incoming messages
  const { selectedConversation } = useConversation();

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (
    <>
      <div className={` w-full lg:block lg:w-[70%] h-screen bg-white${selectedConversation ? "block" : " hidden "} `}>
        <NameTab />
        <div style={{ minHeight: "calc( 100vh - 180px )" }} >
          <div style={{ maxHeight: "calc( 100vh - 180px )" }} className=" overflow-y-auto py-1 custom-scrollbar">
            {/* <Masseges /> */}
            {loading ? (
              <Loading />
            ) : (
              messages.length > 0 &&
              messages.map((message) => (
                <div key={message._id} ref={lastMsgRef}>
                  <Masseges message={message} />
                </div>
              ))
            )}

            {!loading && messages.length === 0 && (
              <div style={{ maxHeight: "calc( 100vh - 190px )" }}>
                <div style={{ minHeight: "calc( 100vh - 190px )" }} className="w-full flex justify-center items-center  text-xl text-[#7747ff] text-center px-10">
                "Hi there! Hope you're having a great day. I'm excited to chat with you!"
                </div>
              </div>
            )}
          </div>
        </div>
        <Sendbox />
      </div>
    </>
  )
}

export default Right