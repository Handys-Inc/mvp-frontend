import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Header from "./components/Header";

// svgs
import crown from "../../assets/icons/crown.svg";
import shield from "../../assets/icons/shield.svg";
import smartphone from "../../assets/icons/smartphone.svg";
import Guide from "./components/Guide";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <Header />

      {/* Features  */}
      <div className="bg-secondary flex flex-col md:flex-row justify-start md:justify-around px-20 py-5 md:py-20 items-center">
        <div className="w-96 px-3 md:px-0">
          <div className="feature-icon">
            <img src={crown} alt="quality service" />
          </div>
          <h3 className="text-xl font-semibold">Quality Service</h3>
          <p className="font-light text-gray">
            Join our community and take control of your income or find reliable
            professionals today
          </p>
        </div>
        <div className="w-96 px-3 md:px-0 my-10 md:my-0">
          <div className="feature-icon">
            <img src={shield} alt="shield" />
          </div>
          <h3 className="text-xl font-semibold">Secure and safe</h3>
          <p className="font-light text-gray">
            Get access to verified, top-rated, and trusted handypersons
          </p>
        </div>
        <div className="w-96 px-3 md:px-0">
          <div className="feature-icon">
            <img src={smartphone} alt="smart phone" />
          </div>
          <h3 className="text-xl font-semibold">Easy to use</h3>
          <p className="font-light text-gray">
            Get your home and work projects completed with a few clicks
          </p>
        </div>
      </div>

      {/* Guide */}
      <Guide />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
