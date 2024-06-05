import React from "react";

function Hero() {
  return (
    <div className="bg-red-300 h-[87vh] flex items-center justify-center mx-40">
      <div className="flex flex-col justify-between items-center">
        <div className="text-[96px] w-[595px] flex flex-col items-start justify-start font-bold ">
          <h1 className="">YOUR FEET </h1>
          <h1 className="">DESERVE</h1>
          <h1 className="">THE BEST</h1>
        </div>
        <div className="flex bg-red-200 items-start justify-start">
          <p className="me-[150px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>
        {/* <div className="text-[96px] w-[595px] flex flex-col items-start justify-start font-bold ">
          <h1 className="">YOUR FEET </h1>
          <h1 className="">DESERVE</h1>
          <h1 className="">THE BEST</h1>
        </div> */}
      </div>
      <div className="bg-blue-300">
        <img
          src="hero_logo.png"
          alt="hero logo"
          srcset=""
          //   className="min-w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
