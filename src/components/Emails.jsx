import React, { useEffect, useState } from "react";
import Email from "./Email";

function Emails() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setEmails(data);
    };
    getData();
  }, []);
  return (
    <div>
      {emails.map((email) => (
        <Email key={email.id} email={email} />
      ))}
    </div>
  );
}

export default Emails;
