import React, { useState } from "react";
import { navLinks } from "../constants";
import DropdownMenu from "./DropdownMenu";

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
            <DropdownMenu
               toggle={toggle}
               setToggle={setToggle}
               navLinks={navLinks}
            />
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
