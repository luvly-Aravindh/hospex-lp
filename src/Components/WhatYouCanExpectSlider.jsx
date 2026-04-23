import React from "react";
import { motion } from "framer-motion";
import Exhibition from "../assets/exhibition.png";
import Conference from "../assets/conference.png";
import Meetings from "../assets/meetings.png";
import Collaboration from "../assets/collaboration.png";

const expectItems = [
  {
    title: "Dynamic Exhibition",
    description:
      "Featuring leading healthcare brands and cutting-edge solutions.",
    icon: Exhibition,
  },
  {
    title: "Insightful Conferences",
    description:
      "Discussions on the future of healthcare, AI, and innovation.",
    icon: Conference,
  },
  {
    title: "B2B Meetings",
    description:
      "Designed to create meaningful business opportunities.",
    icon: Meetings,
  },
  {
    title: "Collaborations",
    description:
      "Across healthcare, technology, and institutional sectors.",
    icon: Collaboration,
  },
];

const duplicatedItems = [...expectItems, ...expectItems];

export default function WhatYouCanExpectSlider() {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="text-center mb-20 px-6">
        <p className="text-blue-600 uppercase text-sm tracking-wide font-medium mb-4">
          WHAT AWAITS YOU
        </p>

        <h2 className="text-4xl md:text-6xl font-medium text-black">
          What You Can Expect
        </h2>
      </div>

      <motion.div
        className="flex gap-10 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="w-[320px] flex-shrink-0">
            <div className="mb-8">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div
              className={`h-[2px] mb-8 ${
                index === 0 ? "bg-blue-500" : "bg-gray-300"
              }`}
            />

            <h3 className="text-2xl font-medium text-black mb-5">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-8 text-base">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}