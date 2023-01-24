import React from "react";
import LearnAbout from "./LearnAbout";
import Underline from "./Underline";

import { solutions } from "../constants";

const Solutions = () => {
   return (
      <div className="flex flex-col md:flex-row gap-6">
         <LearnAbout header="The best business solution for you" />
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {solutions.map((el, ind) => (
               <div
                  key={ind}
                  className="col-span-1 flex items-center sm:items-start flex-col gap-4"
               >
                  <div
                     className={`inline-flex w-fit ${el.iconBg} rounded-full p-5`}
                  >
                     <el.icon className="text-white text-3xl" />
                  </div>
                  <p className="capitalize">{el.title}</p>
                  <Underline />
                  <p className="text-gray-500 text-center sm:text-start">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Expedita perspiciatis obcaecati exercitationem officia
                     quod?
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Solutions;
