import React from "react";
import SectionInfo from "./SectionInfo";
import Timeline from "./Timeline";

const MarketResearch = () => {
   return (
      <div className="flex flex-col md:flex-row z-10 items-center">
         <SectionInfo title="Acceleration Process to Grow Your Business" />
         <Timeline />
      </div>
   );
};

export default MarketResearch;
