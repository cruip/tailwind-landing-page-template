import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Coupler from "./pages/Coupler";
import Monten from "./pages/Monten";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Helmet>
        <meta property="og:title" content="MashiMashi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/wesley-dowel.appspot.com/o/static%2Flogo-bk.png?alt=media&token=51b87bf4-c3de-4584-b4c3-36bd3f28fb41"
        />
        <meta property="og:url" content="https://www.creativemashimashi.com/" />
        <meta
          property="og:description"
          content="We help companies, leaders build and improve team cohesion for a greater business efficiency."
        />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/platform" element={<Coupler />} />
        <Route path="/monten" element={<Monten />} />
      </Routes>
    </>
  );
}

export default App;
