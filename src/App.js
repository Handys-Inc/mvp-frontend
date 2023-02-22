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
import ForgotPassword from "./app/Auth/Forgot/ForgotPassword";
import Reset from "./app/Auth/Reset/Reset";
import ProviderFlow from "./app/Auth/Provider/ProviderFlow";

// HELP CENTER
import HelpCenter from "./help/HelpCenter";
import Customer from "./help/customer/Customer";
import HelpLayout from "./help/layout/HelpLayout";
import Provider from "./help/provider/Provider";
import CustomerCategory from "./help/customer/CustomerCategory";
import Article from "./help/article/Article";

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
        <Route
          path="/auth/provider/validate/:id"
          exact
          element={<ProviderFlow />}
        />

        {/* Auth validation */}
        <Route path="/auth/validate/:id" exact element={<Validate />} />

        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/reset-password" exact element={<Reset />} />

        {/* TODO: HELP CENTER ROUTES */}
        <Route path="/help" element={<HelpLayout />}>
          <Route index element={<HelpCenter />} />
          {/* Customers */}
          <Route path="customer" element={<Customer />} />
          <Route path="customer/:id" element={<CustomerCategory />} />

          {/* Provider */}
          <Route path="provider/:id" element={<Provider />} />

          {/* Articles */}
          <Route path="article/:slug" element={<Article />} />
        </Route>

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
