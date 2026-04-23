import React, { useState } from "react";
import Imageleft from "../assets/hospex-crowd.svg"

import {
  Hospital,
  Microscope,
  Pill,
  Stethoscope,
  Lightbulb,
  Cpu,
  Landmark,
  Handshake,
} from "lucide-react";

const participantData = [
  {
    title: "Hospitals and healthcare providers",
    icon: Hospital,
  },
  {
    title: "Diagnostic and laboratory professionals",
    icon: Microscope,
  },
  {
    title: "Pharmaceutical companies",
    icon: Pill,
  },
  {
    title: "Medical device manufacturers",
    icon: Stethoscope,
  },
  {
    title: "Healthcare startups and innovators",
    icon: Lightbulb,
  },
  {
    title: "AI and digital health companies",
    icon: Cpu,
  },
  {
    title: "Government and institutional stakeholders",
    icon: Landmark,
  },
  {
    title: "Investors, distributors, and partners",
    icon: Handshake,
  },
];

export default function HospexParticipants() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image */}
        <div>
          <img
            src={Imageleft}
            alt="Hospex Event"
            className="w-full h-[700px] object-cover rounded-[36px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-blue-600 uppercase tracking-wide text-sm font-medium mb-4">
            WHO SHOULD PARTICIPATE
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10">
            Is Hospex for You?
          </h2>

          <div className="space-y-3">
            {participantData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex items-center gap-5 px-5 py-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#e9edf5] text-black"
                      : "text-gray-400"
                  }`}
                >
                  <Icon
                    size={22}
                    className="text-blue-600 shrink-0"
                  />

                  <span
                    className={`text-lg md:text-xl font-medium ${
                      activeIndex === index ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}