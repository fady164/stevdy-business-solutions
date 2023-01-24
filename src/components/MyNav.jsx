import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../constants";

const MyNav = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="flex justify-between items-center z-20">
         <h1 className="text-3xl font-bold text-white">STvDy</h1>
         <div>
            <ul className="hidden sm:flex font-light gap-8 text-white">
               {navLinks.map((nav, ind) => (
                  <li key={ind}>{nav}</li>
               ))}
            </ul>
            <div
               className="sm:hidden flex flex-1 justify-end 
         items-center z-30"
            >
               {toggle ? (
                  <AiOutlineClose
                     className="w-[28px] h-[28px] text-primary object-contain cursor-pointer"
                     onClick={() => {
                        setToggle((perv) => !perv);
                     }}
                  />
               ) : (
                  <AiOutlineMenu
                     className="w-[28px] h-[28px] text-primary object-contain cursor-pointer"
                     onClick={() => {
                        setToggle((perv) => !perv);
                     }}
                  />
               )}

               <div
                  className={`${
                     toggle ? "flex" : "hidden"
                  }  p-6  bg-slate-50 absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar `}
               >
                  <ul className="list-none flex-col justify-end items-center flex-1">
                     {navLinks.map((nav, index) => (
                        <li
                           key={index}
                           className={` font-normal cursor-pointer text-[16px] ${
                              index === navLinks.length - 1 ? "mr-0" : "mb-4"
                           } text-gray-600`}
                        >
                           <a href={`#${nav}`}>{nav}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>

         <button
            className="hidden sm:block px-8 py-2 bg-gradient-to-r from-[#FF6057] to-[#7C1C80]
          text-white rounded-lg cursor-pointer"
         >
            About Us
         </button>
      </div>
   );
};

export default MyNav;
