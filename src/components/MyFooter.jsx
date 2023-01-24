import React from "react";

const MyFooter = () => {
   return (
      <div className="bg-[#333333] py-10 text-white mt-10">
         <div className="w-full sm:max-w-[1140px] p-3 mx-auto flex flex-col sm:flex-row sm:gap-5 gap-10 ">
            <div className="flex flex-col gap-5 items-center sm:items-start">
               <h1 className="font-bold text-[35px]">Study</h1>
               <p className="w-full sm:w-11/12 text-sm font-light text-center sm:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget diam at mi sollicitudin
               </p>
            </div>
            <div className="flex flex-col gap-5 items-center sm:items-start">
               <p className="font-semibold text-md">Nos services</p>
               <div className="text-sm font-light ">
                  <ul className="text-center sm:text-start">
                     <li>Avis clients</li>
                     <li>Mentions légales</li>
                     <li>Plan du site</li>
                     <li>Blog d’Idéematic</li>
                     <li></li>
                     <li>Le dictionnaire du digital</li>
                     <li>‹ Notre boutique /›</li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col items-center gap-5 w-full sm:w-1/2">
               <p className="font-semibold text-sm">
                  Sign up for Special Offers!
               </p>
               <div className="bg-white rounded-full justify-between pl-5 flex">
                  <input
                     type="text"
                     className="focus:outline-none text-black"
                     placeholder="Mail"
                  />
                  <button className="bg-primary rounded-full px-5 py-2">
                     Subscribe
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyFooter;
