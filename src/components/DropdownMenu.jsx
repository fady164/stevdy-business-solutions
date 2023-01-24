import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const DropdownMenu = ({ toggle, setToggle, navLinks }) => {
   return (
      <div className="sm:hidden flex flex-1 justify-end items-center z-30">
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
   );
};

export default DropdownMenu;
