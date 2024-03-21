import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100 pt-5 px-4">
      <Header />

      <div className="flex mt-4 h-[80vh]">
        <Navbar />
        <div className="bg-white flex-1 rounded-2xl p-2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
