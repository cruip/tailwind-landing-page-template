import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import CouplerHero from "../partials/CouplerHero";
import PickupRole from "../partials/PickupRole";
import CreateProfile from "../partials/CreateProfile";
import FindRightPeople from "../partials/FindRightPeople";
import CheckProfile from "../partials/CheckProfile";
import TryItOut from "../partials/TryItOut";
import { Helmet } from "react-helmet";

function Coupler() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="A new platform we created for information providers and receivers."
        />
        <meta
          property="og:title"
          content="Coupler - Create valuable connection"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/wesley-dowel.appspot.com/o/static%2Fcoupler-ogp.png?alt=media&token=9263dd76-973c-46c4-872d-0bb195277f1c"
        />
        <meta
          property="og:url"
          content="https://www.creativemashimashi.com/platform"
        />
        <meta
          property="og:description"
          content="A new platform we created for information providers and receivers."
        />
      </Helmet>
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
    </>
  );
}

export default Coupler;
