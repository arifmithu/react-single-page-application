import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ShowMessage from "./components/ShowMessage.jsx";
import Contacts from "./components/Contacts.jsx";
import Home from "./components/Home.jsx";
import Emails from "./components/Emails.jsx";
import Starred from "./components/Starred.jsx";
import Snoozed from "./components/Snoozed.jsx";
import SentEmails from "./components/Sent.jsx";
import DraftsEmails from "./components/DraftsEmails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/showmessage",
        element: <ShowMessage />,
      },
      {
        path: "/snoozed",
        element: <Snoozed />,
      },
      {
        path: "/sent",
        element: <SentEmails />,
      },
      {
        path: "/drafts",
        element: <DraftsEmails />,
      },
      {
        path: "/starred",
        element: <Starred />,
      },
      {
        path: "/emails",
        element: <Emails />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
