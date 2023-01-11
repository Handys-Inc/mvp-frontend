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

      {/* Features  */}
      <div className="bg-secondary flex justify-around py-20 items-center">
        <div>
          <h3>Quality Service</h3>
          <p>
            Join our community and take control of your income or find reliable
            professionals today
          </p>
        </div>
        <div>
          <h3>Secure and safe</h3>
          <p>Get access to verified, top-rated, and trusted handypersons</p>
        </div>
        <div>
          <h3>Easy to use</h3>
          <p>Get your home and work projects completed with a few clicks</p>
        </div>
      </div>

      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
