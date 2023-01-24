import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Underline from "./Underline";

const LearnAbout = ({ header }) => {
   return (
      <div className="flex flex-col items-center sm:items-start gap-4 ">
         <Underline />
         <div className="w-full sm:w-3/4">
            <h3 className="text-[40px] text-center sm:text-start font-bold">
               {header}
            </h3>
         </div>
         <p className="text-sm text-center sm:text-start text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            fugiat pariatur obcaecati, quos inventore tenetur praesentium quam
            magnam! Eaque necessitatibus esse explicabo quo corporis, provident
            sunt quaerat quasi at odit.
         </p>
         <div className="flex flex-row items-center w-2/3 justify-between text-primary">
            <p className="capitalize text-base font-normal">
               learn about our success
            </p>
            <span>
               <FiArrowRight className="cursor-pointer" />
            </span>
         </div>
      </div>
   );
};

export default LearnAbout;
