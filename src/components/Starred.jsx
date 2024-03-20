import React, { useEffect, useState } from "react";
import Email from "./Email";

function Starred() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("starred.json");
      const data = await response.json();
      setEmails(data);
    };
    getData();
  }, []);
  return (
    <div>
      {emails.map((email) => (
        <Email key={email.id} email={email} starred={"starred"} />
      ))}
    </div>
  );
}

export default Starred;
