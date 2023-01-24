import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
   return (
      <div className="flex gap-5 p-12 card">
         <div className=" w-full h-full">
            <img src="./imgs/prof-pic.png" alt="" />
         </div>
         <div className="flex flex-col gap-10">
            <div>
               <h5 className="text-md text-start mb-1">Florrie Jacobs</h5>
               <p className="text-xs text-start text-gray-500">
                  CEO of Company
               </p>
            </div>
            <div className="w-11/12">
               <p className="text-start text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
               </p>
            </div>
            <div className="flex gap-1">
               <AiFillStar className="text-[#CB48F9]" />
               <AiFillStar className="text-[#CB48F9]" />
               <AiFillStar className="text-[#CB48F9]" />
               <AiFillStar className="text-[#CB48F9]" />
               <AiFillStar className="text-[#CB48F9]" />
            </div>
         </div>
      </div>
   );
};

export default Card;
