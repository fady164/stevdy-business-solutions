import React from "react";
import MyButton from "./MyButton";

const SectionInfo = ({ title }) => {
   return (
      <div className="flex flex-1 flex-col gap-5 items-center sm:items-start mb-5 sm:mb-0">
         <h3 className="text-3xl font-bold w-3/4 text-center sm:text-start">
            {title}
         </h3>
         <p className="text-gray-500 text-light w-11/12 text-center sm:text-start">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
         </p>
         <MyButton color="bg-gradient-to-r from-[#FF6057] to-[#7C1C80]" />
      </div>
   );
};

export default SectionInfo;
