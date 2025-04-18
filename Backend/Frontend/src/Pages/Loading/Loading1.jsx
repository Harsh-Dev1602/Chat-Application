import React from 'react'
import "../Loading/Loading.css";
function Loading1() {
    return (
        <>
            <div style={{ minHeight: "calc( 100vh - 150px )" }}
                className="w-full  bg-white flex justify-center items-center">
                <div style={{ maxHeight: "calc( 100vh - 150px )" }} >
                    <div className="loader"></div>
                </div>
            </div>
        </>
    )
}

export default Loading1