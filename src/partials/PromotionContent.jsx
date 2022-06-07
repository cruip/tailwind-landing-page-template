import React from "react";
import WhyNowImage from "../images/why-now.png";
import RelationShipsImage from "../images/relationships.png";
import CultureImage from "../images/culture.png";
import PerformanceImage from "../images/performance.png";
import EngagementImage from "../images/engagement.png";

const articles = [
  {
    title: "Enhanced Performance",
    subtitle:
      "Team cohesion is positively linked to organizational performance.",
    imgSrc: PerformanceImage,
  },
  {
    title: "Great Engagement",
    subtitle:
      "Productivity, profitability and business growth all come together.",
    imgSrc: EngagementImage,
  },
  ,
  {
    title: "Good Relationships and Belonging",
    subtitle:
      "Alignment to corporate vision, mission and values that all links to the business success.",
    imgSrc: RelationShipsImage,
  },
  {
    title: "A Better Workplace Culture",
    subtitle:
      "It creates an efficient workflow in the organizations and increases employee retention.",
    imgSrc: CultureImage,
  },
];

function PromotionContent() {
  return (
    <section className="relative" id="service">
      <div className="bg-skin">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-primary">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4 font-extrabold">
                A great team cohesion leads to
              </h2>
            </div>
            {articles.map((props) => (
              <Article {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Article = ({ title, subtitle, imgSrc }) => (
  <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
    {/* Section header */}
    <div
      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:mt-6"
      data-aos="zoom-y-out"
    >
      <h1
        className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
      >
        {title}
      </h1>

      <div className="max-w-3xl">
        <p
          className="text-lg md:text-xl mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="150"
        >
          {subtitle}
        </p>
      </div>
    </div>
    {/* Section image */}
    <div
      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0"
      data-aos="fade-right"
    >
      <img src={imgSrc} width="396" height="450" />
    </div>
  </div>
);

export default PromotionContent;
