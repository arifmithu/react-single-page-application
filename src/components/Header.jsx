import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgMenuGridO, CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-4 items-center text-2xl">
        <MdOutlineMenu />
        <SiGmail />
        <h1 className="">Gmail</h1>
      </div>
      <div className="flex justify-between  bg-slate-200 px-4 py-2 rounded-[32px] w-[800px]">
        <div className="flex items-center gap-2">
          <IoSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-inherit w-[650px] focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <RxCross1 />
          <TfiMenuAlt />
        </div>
      </div>
      <div className="flex gap-4 text-2xl justify-center items-center">
        <FaRegQuestionCircle />
        <IoSettingsOutline />
        <CgMenuGridO />
        <div className="p-2 bg-red-400 border rounded-full">
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Header;
