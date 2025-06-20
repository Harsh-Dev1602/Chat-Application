import React from 'react'
import "../Loading/Loading.css";
function Loading1() {
    return (
        <>
            <div style={{ minHeight: "calc( 100vh - 160px )" }}
                className="w-full  flex justify-center items-center">
                <div style={{ maxHeight: "calc( 100vh - 160px )" }} >
                    <div className="loader"></div>
                </div>
            </div>
        </>
    )
}

export default Loading1