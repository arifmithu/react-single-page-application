import React from "react";
import { Link } from "react-router-dom";
import { FaPencil, FaAngleDown } from "react-icons/fa6";
import { FaTabletAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { MdOutlineNoteAdd } from "react-icons/md";

function Navbar() {
  return (
    <div className=" w-[200px]">
      <div className="flex gap-3 items-center bg-blue-200 py-3 justify-between font-bold rounded-2xl px-5 ml-[-10px] w-[70%]">
        <FaPencil />
        <Link>Compose</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <FaTabletAlt />
        <Link to={"/emails"}>Inbox</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <FaRegStar />
        <Link to={"/starred"}>Starred</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <MdOutlineWatchLater />
        <Link to={"/snoozed"}>Snoozed</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <BiRightArrow />
        <Link to={"/sent"}>Sent</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <MdOutlineNoteAdd />
        <Link to={"/drafts"}>Drafts</Link>
      </div>
      <div className="flex gap-5 text-lg items-center mt-2">
        <FaAngleDown />
        <Link>More</Link>
      </div>
      {/* <Link to={"/home"}>Home</Link> */}
      <Link to={"/showmessage"}>Message</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
  );
}

export default Navbar;
