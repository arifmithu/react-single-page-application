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
