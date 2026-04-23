import React from "react";

import headingIcon from "../assets/heading-icon.png";
import aboutImage from "../assets/about-image.svg";

const AboutHospex = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-20 flex-wrap text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-black">
            Accelerating
          </h2>

          <img
            src={headingIcon}
            alt="Icon"
            className="w-16 md:w-20 object-contain"
          />

          <h2 className="text-4xl md:text-6xl font-light text-black">
            Healthcare Innovation
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Healthcare Expo"
              className="w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Right text */}
          <div className="max-w-[520px]">
            <p className="text-blue-600 uppercase text-sm font-semibold tracking-wide mb-8">
              About Hospex
            </p>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Hospex is a premier healthcare exhibition and conference designed
              to accelerate innovation, collaboration, and investment in the
              healthcare sector. It serves as a hub where industry leaders
              connect, showcase solutions, and build meaningful partnerships
              that shape the future of healthcare.
            </p>

            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              Over three high-impact days, Hospex creates opportunities for real
              business interactions bringing together decision-makers,
              innovators, and stakeholders from across the healthcare ecosystem.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-medium shadow-lg transition duration-300">
              Register Now and Be Part of It
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHospex;