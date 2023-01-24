import React from "react";

import { timelineData as data } from "../constants";

const Timeline = () => {
   return (
      <div className="flex flex-col p-0 sm:p-5 w-full sm:w-1/2">
         {data.map((item, index) => (
            <div key={index} className="flex gap-5">
               <div className="flex flex-col items-center ">
                  <div className="bg-primary rounded-full px-4 py-2 my-3 text-white flex justify-center items-center">
                     1
                  </div>
                  {index === data.length - 1 ? null : (
                     <div className="w-1 h-full p-[2px] rounded-full bg-gray-300"></div>
                  )}
               </div>
               <div className="flex flex-col gap-5 pt-3 items-start justify-start">
                  <h4 className="font-medium">{item}</h4>
                  <p className="text-gray-500 font-light ">
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore
                     magna aliquyam erat, sed diam voluptua.
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Timeline;
