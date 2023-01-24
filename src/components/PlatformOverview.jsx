import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper";

const PlatformOverview = () => {
   return (
      <div className="flex flex-col gap-5 z-10 items-center ">
         <p className="text-lg text-gray-500">
            Advanced Customer Service Platform
         </p>
         <h3 className="font-bold text-[50px] text-center">
            Platform Overview
         </h3>
         <div className="w-3/4">
            <p className="text-light text-gray-400 text-center">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
               erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet
            </p>
         </div>
         <div className="w-full h-full p-0 sm:p-10">
            <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src="./imgs/dashboard.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./imgs/dashboard.png" alt="" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./imgs/dashboard.png" alt="" />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default PlatformOverview;
