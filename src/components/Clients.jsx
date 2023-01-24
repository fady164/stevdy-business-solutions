import React from "react";
import { imgs } from "../constants";

const Clients = () => {
   return (
      <div className="flex flex-wrap justify-center items-center z-30">
         {imgs.map((img, ind) => (
            <img src={`./imgs/${img}`} key={ind} alt="" />
         ))}
      </div>
   );
};

export default Clients;
