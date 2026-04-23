import React from "react";

import handshakeIcon from "../assets/handshake.png";
import medicalImage from "../assets/medical-room.jpg";

const benefits = [
  {
    number: "01",
    title: "Real Business\nNetworking",
    description:
      "Connect with hospital decision-makers, distributors, and partners for meaningful collaborations.",
  },
  {
    number: "02",
    title: "Showcase\nInnovations",
    description:
      "Present products and innovations to the right, targeted audience.",
  },
  {
    number: "03",
    title: "Access Industry\nLeaders",
    description:
      "Direct access to investors, collaborators, and key decision-makers.",
  },
  {
    number: "04",
    title: "Conferences &\nSessions",
    description:
      "Engage with sessions focused on emerging healthcare trends and technologies.",
  },
  {
    number: "05",
    title: "Expand Globally",
    description:
      "A platform to enter new markets and forge global partnerships.",
  },
];

const WhyHospex = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-10">
      <div className="max-w-[1450px] mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-600 uppercase text-sm font-semibold mb-4">
            WHY HOSPEX
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-black">
            Why You Should <span className="font-bold">Be at Hospex</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {benefits.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="lg:col-span-3 bg-white rounded-[28px] shadow-md px-8 pt-6 pb-8 min-h-[255px]"
            >
              <h3 className="text-[90px] leading-none font-light text-transparent stroke-text">
                {item.number}
              </h3>

   <div className="flex items-start gap-3 mt-3 mb-4">
  <img
    src={handshakeIcon}
    alt=""
    className="w-5 h-5 object-contain mt-1"
  />

  <h4 className="text-[22px] leading-tight font-medium whitespace-pre-line">
    {item.title}
  </h4>
</div>

              <p className="text-gray-500 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Bottom left card */}
          <div className="lg:col-span-3 bg-white rounded-[28px] shadow-md px-8 pt-6 pb-8 min-h-[255px]">
            <h3 className="text-[90px] leading-none font-light text-transparent stroke-text">
              {benefits[4].number}
            </h3>

            <div className="flex items-center gap-2 mt-2 mb-4">
              <img
                src={handshakeIcon}
                alt=""
                className="w-5 h-5 object-contain"
              />
            </div>

            <h4 className="text-[22px] leading-tight font-medium mb-4">
              {benefits[4].title}
            </h4>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              {benefits[4].description}
            </p>
          </div>

          {/* Blue middle card */}
          <div className="lg:col-span-3 bg-blue-600 rounded-[28px] px-8 py-8 flex items-end min-h-[255px] relative overflow-hidden">
            <h3 className="text-white text-5xl font-light leading-tight">
              Join
              <br />
              <span className="font-medium">Hospex</span>
              <br />
              2026
            </h3>
          </div>

          {/* Large image */}
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden shadow-md min-h-[255px]">
            <img
              src={medicalImage}
              alt="Medical"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Number outline style */}
      <style>
        {`
          .stroke-text {
            -webkit-text-stroke: 2px #6d97ff;
          }
        `}
      </style>
    </section>
  );
};

export default WhyHospex;