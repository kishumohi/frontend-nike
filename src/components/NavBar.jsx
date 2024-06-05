import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between mx-auto p-3 font-bold h-[9vh]">
      <img
        src="logo.png"
        alt="logo"
        srcset=""
        width={48}
        height={76}
        className="ltr ms-[86px]"
      />
      <ul className="flex items-center justify-around gap-6 px-2">
        <li className="">
          <a href="#">MENU</a>
        </li>
        <li className="">
          <a href="#">LOCATION</a>
        </li>
        <li className="">
          <a href="#">ABOUT</a>
        </li>
        <li className="">
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <button className="border border-slate-400 rounded-sm px-4 py-[6px] bg-red-500 text-white rtl me-[86px]">
        Login
      </button>
    </div>
  );
}

export default NavBar;
