import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Helmet } from "react-helmet";
import MontenLandingImage from "../images/monten-landing.png";

function Monten() {
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
          content="https://firebasestorage.googleapis.com/v0/b/wesley-dowel.appspot.com/o/static%2Fcoupler-ogp.png?alt=media&token=3728ecdc-0407-4d29-8567-fdd9b315138b"
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
        <main className="mx-auto pt-32 bg-white flex font-coupler">
          <div className="max-w-3xl pt-52">
            <h1 className="text-2xl font-bold mb-14">悩んでいる時、 みんなの意見が気にする？</h1>
            <h2 className="text-xl mb-4">問天 it is a platform enabling an anonymously access to public feedback on whatever you're wondering, helping you with making a confident decision or just have fun!</h2>
            <form className="flex gap-3">
              <input
                type="text"
                className="w-full max-w-xs border border-gray-300 px-4 py-2 rounded-md mb-2"
                placeholder="Input"
              />
              <button
                type="submit"
                className="text-white w-36 h-11 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500"
              >
                Check it out
              </button>
            </form>
          </div>
          <div className="">
            
            <img src={MontenLandingImage} alt="landing main image" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Monten;
