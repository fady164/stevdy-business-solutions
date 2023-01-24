import React from "react";

import { statisticsData as data } from "../constants";

const Statistics = () => {
   return (
      <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between w-1/2 sm:w-11/12 mx-auto">
         {data.map((item, ind) => (
            <div key={ind} className="flex flex-col items-center mb-5">
               <h3 className="font-bold text-3xl text-center text-primary">
                  {item.number}
               </h3>
               <p className="capitalize font-normal text-center">{item.head}</p>
            </div>
         ))}
      </div>
   );
};

export default Statistics;
