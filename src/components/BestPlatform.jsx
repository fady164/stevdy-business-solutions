import React from "react";
import LearnAbout from "./LearnAbout";

const BestPlatform = ({ reverse = "sm:flex-row", rectangle, postion }) => {
   return (
      <div
         className={`flex flex-col ${reverse} justify-between gap-10 relative `}
      >
         <div className={`absolute w-full h-full top-[-350px] ${postion} z-0`}>
            <img
               src={`./imgs/${rectangle}.png`}
               className="w-[1211px] h-[1116px]"
               alt=""
            />
         </div>
         <div className="w-full h-full z-10">
            <img
               src="./imgs/dashboard.png"
               className="w-full h-full object-contain"
               alt=""
            />
         </div>
         <div className="w-full flex items-center z-10">
            <LearnAbout header="Best Platform for the Technological Era" />
         </div>
      </div>
   );
};

export default BestPlatform;
