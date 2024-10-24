import React from "react";
import MarketingLayout from "./layout";

const HomePage = () => {
  return (
    <MarketingLayout>
      <>
     
      <div className="text-center flex flex-col justify-center font-bold min-h-screen ">
          <h1 className="text-white  text-1xl md:text-5xl lg:text-6xl xl:text-7xl">
            Building{" "}
            <span className="bg-gradient-to-r from-[#FF41A9] via-[#FA40A6] to-[#1166C8] bg-clip-text text-transparent">
              Tomorrow’s
            </span>{" "}
            Solutions
          </h1>
          <h4 className="text-[10px] md:text-[20px] mt-10 text-white">
            At InnovateHub, we create breakthrough solutions that push the
            limits of technology and design
          </h4>
        </div>
        {/* 2nd section */}
        <div className="text-center flex flex-col justify-center font-bold min-h-screen ">
          <h1 className="text-white  text-1xl md:text-3xl lg:text-4xl xl:text-4xl">
            <span className="bg-gradient-to-r from-[#FF41A9] via-[#FA40A6] to-[#1166C8] bg-clip-text text-transparent">
              Project's
            </span>{" "}
            We Builded
          </h1>
       
        </div>
     
   
      </>
    </MarketingLayout>
  );
};

export default HomePage;
