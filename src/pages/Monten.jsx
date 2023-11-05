import React from "react";
import { Helmet } from "react-helmet";
import MontenLandingImage from "../images/monten-landing.png";
import MontenHeader from '../partials/MontenHeader';

function Monten() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.email
    //call to the Netlify Function you created
    
    try {
      await fetch(
        `${process.env.URL}/.netlify/functions/emails/subscribed`,
        {
          headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
          },
          method: "POST",
          body: JSON.stringify({
            from: "ptang8@bus.illinois.edu",
            to: subscriberEmail,
            subject: "Great to have you on board!",
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
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
        <MontenHeader />
        {/*  Page content */}
        <main className="px-6 md:px-36 pt-32 md:pt-52 bg-white flex flex-col xl:flex-row font-inter">
          <div className="max-w-3xl xl:mr-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-14">悩んでいる時、 みんなの意見が気にする？</h1>
            <h2 className="text-xl mb-20">Monten は、好奇心の世界への扉を開き、あなたの興味をそそるものなら何でも、匿名で世間の声を探ります。決断する自信を求めている人も、単純に楽しい時間を求めている人も、Monten は無限の可能性への入り口です。</h2>
            <form className="flex gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full max-w-xs border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Your email"
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
