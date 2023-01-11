import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Header from "./components/Header";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
