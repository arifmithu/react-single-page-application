import React from "react";
import { BiRectangle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

function Email({ email, starred }) {
  const { sender_name, email_title, email_content, time } = email;
  return (
    <div className="flex mb-4">
      <div className="flex gap-2 items-center w-[200px] overflow-hidden overflow-ellipsis text-nowrap">
        <BiRectangle />
        <FaRegStar
          className={`${starred === "starred" ? "text-red-500" : ""}`}
        />
        <h1 className="font-bold">{sender_name}</h1>
      </div>
      <div className="flex gap-2 w-[700px] text-nowrap  mr-8">
        <span className="font-bold text-sm">{email_title}</span> -
        <span className="overflow-hidden overflow-ellipsis">
          {email_content}
        </span>
      </div>
      <div>
        <p className="font-bold text-sm">{time}</p>
      </div>
    </div>
  );
}

export default Email;
