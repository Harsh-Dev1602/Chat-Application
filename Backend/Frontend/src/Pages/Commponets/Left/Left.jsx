import React from 'react'
import Header from './Header'
import Usear from './Usear'
import useGetAllUsers from '../../../Context/useGetAllUsers'
import useConversation from '../../../zustand/useConversation';

function Left() {
   const [allUsers, loading] = useGetAllUsers();
   // console.log(allUsers);
   const { selectedConversation } = useConversation();

   return (
      <>
         <div style={{ maxHeight: "100vh" }} className={` w-full lg:w-[30%] bg-white h-screen border-[#cccc] lg:block lg:border-r-2  ${selectedConversation ?"hidden":"block"}`} >
            <Header />
            <div style={{ minHeight: "calc( 100vh - 144px )" }} >
               <div style={{ maxHeight: "calc( 100vh - 144px )" }} className="  overflow-y-auto custom-scrollbar pb-5 ">
                  {allUsers.map((user, id) => (
                     <Usear key={id} user={user} />
                  ))}
                  {/* <Usear /> */}
               </div>
            </div>
         </div>
      </>
   )
}

export default Left