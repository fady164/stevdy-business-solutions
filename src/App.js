import "./App.css";
import Advice from "./components/Advice";
import BestPlatform from "./components/BestPlatform";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import MyNav from "./components/MyNav";
import PlatformOverview from "./components/PlatformOverview";
import Solutions from "./components/Solutions";
import Statistics from "./components/Statistics";
import MarketResearch from "./components/MarketResearch";
import Company from "./components/Company";
import MyFooter from "./components/MyFooter";

function App() {
   return (
      <div>
         <div className="w-full h-full relative overflow-x-hidden">
            <div className="absolute w-full h-full top-0 left-0 z-0">
               <img src="./imgs/bg1.png" className="w-full h-full z-0" alt="" />
            </div>
            <div className=" w-full h-screen ">
               <div className="max-w-[1140px] mx-auto px-3 py-4 flex flex-col  gap-[80px] ">
                  <MyNav />
                  <Hero />
                  <Clients />
                  <Solutions />
                  <BestPlatform postion="left-[-850px]" rectangle="rec1" />
                  <PlatformOverview />
                  <BestPlatform
                     rectangle="rec2"
                     postion="right-[-850px]"
                     reverse="sm:flex-row-reverse"
                  />
                  <MarketResearch />
                  <Advice />
                  <Statistics />
                  <Company />
               </div>
               <MyFooter />
            </div>
         </div>
      </div>
   );
}

export default App;
