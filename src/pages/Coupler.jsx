import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Coupler() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow"></main>
      <div>Neo starts from here</div>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Coupler;
