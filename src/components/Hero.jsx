import React from "react";
import MyButton from "./MyButton";

const Hero = () => {
   return (
      <div className="max-h-screen flex md:flex-row flex-col text-white z-10">
         <div className="flex flex-col gap-3 justify-center">
            <p className="font-medium text-2xl">Advanced Platform</p>
            <h1 className="text-[30px] w-1/2 sm:w-full md:text-[50px] font-bold">
               Take your team to the next level
            </h1>
            <p className="font-light text-lg w-1/2 sm:w-full">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
               necessitatibus?
            </p>
            <MyButton color="bg-white" font="primary" />
            <div></div>
         </div>
         <div className="w-full h-full">
            <img src="./imgs/dashboard.png" alt="" />
         </div>
      </div>
   );
};

export default Hero;
