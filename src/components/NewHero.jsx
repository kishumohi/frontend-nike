import React from "react";

function NewHero() {
  return (
    <div className="flex h-[87vh] items-center justify-center mx-40">
      <div className=" w-[50%] h-full flex flex-col">
        <div className=" w-full h-full">
          <div className="text-[80px] flex flex-col items-start justify-start font-extrabold ">
            <h1 className="">YOUR FEET </h1>
            <h1 className="">DESERVE</h1>
            <h1 className="">THE BEST</h1>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start font-extrabold text-[#5A5959] text-[12px] leading-5">
            <h1 className="">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO</h1>
            <h1 className="">HELP YOU WITH OUR SHOES.YOUR FEET DESERVE</h1>
            <h1 className="">THE BEST AND WE’RE HERE TO HELP YOU WITH OUR</h1>
            <h1 className="">SHOES.</h1>
          </div>
          <div className="flex">
            <button className="border border-slate-400 rounded-sm px-3 py-[6px] bg-red-500 text-white rtl me-[24px] text-[19px] font-bold">
              Shop Now
            </button>
            <button className="border border-slate-400 rounded-sm px-3 py-[6px] bg-white text-[#5A5959] text-[19px] font-bold">
              Category
            </button>
          </div>
          <h1>Also Available On</h1>
          <div className="flex gap-6">
            <img
              src="flipcart.png"
              alt="flipCart"
              srcset=""
              height={32}
              width={32}
            />
            <img
              src="amazon.png"
              alt="amazon"
              srcset=""
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
      <div className=" w-[50%]">
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

export default NewHero;
