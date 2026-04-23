import React from "react";
import bgImage from "../assets/your-image.png"; // replace with your image

export default function HealthcareHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Healthcare Background"
        className="absolute inset-0 w-full h-full object-cover"
      />



      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        
        {/* Heading */}
        <h1 className="text-white font-semibold text-2xl md:text-5xl leading-tight md:leading-[1.2]">
          Trusted by Healthcare Leaders Across the Industry
        </h1>

        {/* Subtext */}
        <p className="text-white/90 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed">
          Join thousands of professionals, innovators, and decision-makers who
          come together to build connections, discover opportunities, and drive
          the future of healthcare.
        </p>

        {/* CTA Button */}
        <div className="mt-6 md:mt-10">
          <button className="bg-white text-blue-600 font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg shadow-lg hover:scale-105 transition duration-300">
            JOIN 10,000+ PROFESSIONALS
          </button>
        </div>

      </div>
    </section>
  );
}