import React from "react";

const MyButton = ({ color, font = "white" }) => {
   return (
      <button
         className={`max-w-[178px] px-8 py-2 ${color} text-${font} rounded-lg cursor-pointer shadow-md`}
      >
         About us
      </button>
   );
};

export default MyButton;
