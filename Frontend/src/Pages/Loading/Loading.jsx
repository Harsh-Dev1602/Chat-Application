import React from "react";
import "../Loading/Loading.css";
function Loading() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}
        className="w-full  bg-white flex justify-center items-center">
        <div style={{ maxHeight: "100vh" }} >
          <div class="loader"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
