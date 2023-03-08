import React from "react";
import { Outlet } from "react-router-dom";
import Border from "../../components/Border/Border";

import { articles } from "../data/articles";

// import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "../../components/Navbar/Navbar";

// import { IoLocation } from "react-icons/io5";

function HelpLayout() {
  return (
    <div className="min-h-screen w-full">
      {/* <Header /> */}
      <Navbar />
      <div className="px-5 mx-auto min-h-[70vh]">
        <Outlet context={articles} />
      </div>

      <Border />
      <Footer />
    </div>
  );
}

export default HelpLayout;
