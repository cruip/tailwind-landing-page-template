import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import CouplerHero from "../partials/CouplerHero";
import PickupRole from "../partials/PickupRole";
import CreateProfile from "../partials/CreateProfile";
import FindRightPeople from "../partials/FindRightPeople";
import CheckProfile from "../partials/CheckProfile";
import TryItOut from "../partials/TryItOut";

function Coupler() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow font-coupler">
        <CouplerHero />
        <PickupRole />
        <CreateProfile />
        <FindRightPeople />
        <CheckProfile />
        <TryItOut />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Coupler;
