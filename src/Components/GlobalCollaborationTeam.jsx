import React from "react";
import { motion } from "framer-motion";

import Team1 from "../assets/team-1.png";
import Team2 from "../assets/team-2.png";
import Team3 from "../assets/team-3.png";
import Team4 from "../assets/team-4.png";
import Team5 from "../assets/team-5.png";
import Team6 from "../assets/team-6.png";
import Team7 from "../assets/team-7.png";
import Team8 from "../assets/team-8.png";
import Team9 from "../assets/team-9.jpg";
import Team10 from "../assets/team-10.jpg";
import Team11 from "../assets/team-11.png";
import Team12 from "../assets/team-12.png";
import Team13 from "../assets/team-13.png";
import Team14 from "../assets/team-14.png";
import Team15 from "../assets/team-15.png";

const teamMembers = [
  { image: Team1, name: "Dr Arun Krishna", role: "Founder & Director" },
  { image: Team2, name: "Dr Nivin J S", role: "Founder & Director" },
  { image: Team3, name: "Dr Fasna (Mayakkara) A.", role: "Global Director" },
  { image: Team4, name: "Dr Indu Kandaga", role: "Director" },
  {
    image: Team5,
    name: "Ms. Rama Venugopal",
    role: "Chairwoman, Hospex Conferences & Strategic Advisor",
  },
  { image: Team6, name: "Dr Jawad Hussain", role: "Chief Strategic Officer" },
  {
    image: Team7,
    name: "Ms Soumya TS",
    role: "Head of Marketing, Communications & PR",
  },
  { image: Team8, name: "Mr Jithlal", role: "Head Production" },
  {
    image: Team9,
    name: "Mr Akwinaus Varghese",
    role: "Head Technical & Volunteers Coordination",
  },
  { image: Team10, name: "Mr Punit", role: "Exhibitor Relations & Sales" },
  { image: Team11, name: "Dr Ashmy", role: "Exhibitor Relations & Sales" },
  { image: Team12, name: "Dr Abhirami", role: "Exhibitor Relations & Sales" },
  {
    image: Team13,
    name: "Mr Mohammed Ilias",
    role: "Founder & Director, BCC Martech",
  },
];

const duplicatedTeam = [...teamMembers, ...teamMembers];

export default function GlobalCollaborationTeam() {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight">
            Global Collaboration & Medical Tourism
          </h2>

          <p className="text-gray-500 text-lg leading-8 mt-8">
            Hospex opens doors to international partnerships and cross-border
            healthcare opportunities. By connecting stakeholders across regions,
            it creates a platform for collaboration in medical services,
            innovation, and healthcare delivery.
          </p>

          <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg md:text-xl font-semibold shadow-lg transition duration-300">
            EXPLORE GLOBAL OPPORTUNITIES
          </button>
        </motion.div>

        {/* Team title */}
        <div className="mt-24 mb-12">
          <p className="text-blue-600 uppercase text-sm tracking-[0.25em] mb-4">
            OUR TEAM
          </p>

          <h3 className="text-4xl md:text-5xl font-medium text-black">
            Meet the People Behind Hospex
          </h3>
        </div>
      </div>

      {/* Slider */}
      <motion.div
        className="flex gap-6 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {duplicatedTeam.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="w-[280px] flex-shrink-0 rounded-[28px] overflow-hidden bg-white shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[340px] object-cover"
            />

            <div className="p-6">
              <h4 className="text-lg font-semibold text-black leading-snug">
                {member.name}
              </h4>

              <p className="text-gray-500 text-sm mt-2 leading-6">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}