import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// general app pages
import Home from "./app/Home/Home";
import Notfound from "./app/NotFound/Notfound";
import LogIn from "./app/Auth/LogIn/LogIn";
import SignUp from "./app/Auth/SignUp/SignUp";
import ClientSignUp from "./app/Auth/Client/ClientSignUp";
import ProviderSignUp from "./app/Auth/Provider/ProviderSignUp";
import ProviderLogin from "./app/Auth/Provider/ProviderLogin";
import ClientLogin from "./app/Auth/Client/ClientLogin";
import Validate from "./app/Auth/Validate/Validate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Home />} />
        {/* Auth Routes for Sign up and Login (Client and Provider) */}
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />

        {/* Specific Auth Routes: Client */}
        <Route path="/signup/client" exact element={<ClientSignUp />} />
        <Route path="/login/client" exact element={<ClientLogin />} />

        {/* Specific Auth Routes Provider */}
        <Route path="/signup/provider" exact element={<ProviderSignUp />} />
        <Route path="/login/provider" exact element={<ProviderLogin />} />

        {/* Auth validation */}
        <Route path="/auth/validate/:id" exact element={<Validate />} />

        {/* Specific Auth Routes: Provider */}

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
