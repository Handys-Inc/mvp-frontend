
import React from "react";
import { Outlet} from "react-router-dom";
import Border from "../../components/Border/Border";



import Header from "./components/Header";
import Footer from "./components/Footer";

// import { IoLocation } from "react-icons/io5";

function HelpLayout() {
  const sampleData = [
    { title: "hello world", content: "hiii", type: "customer" },
    { title: "hello world", content: "hiii", type: "customer" },
    { title: "hello world", content: "hiii", type: "customer" },
  ];

   

  return (
    <div className="min-h-screen w-full">
    <Header/>
<div className="px-5 mx-auto min-h-[70vh]">
 <Outlet context={sampleData} />
</div>
     

      <Border />
     <Footer/>
    </div>
  );
}

export default HelpLayout;
