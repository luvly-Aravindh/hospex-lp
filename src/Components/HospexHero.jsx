import React, { useEffect, useState } from "react";
import { MapPin, CalendarDays } from "lucide-react";

import doctorImage from "../assets/doctor.svg";
import logoImage from "../assets/logo.svg";
import rightBgImage from "../assets/right-bg.svg";

const CounterItem = ({ target, suffix = "", label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-500 mt-1 text-sm sm:text-base">{label}</p>
    </div>
  );
};

const HospexHero = () => {
  return (
<section className="relative overflow-visible bg-[#f5f5f5] h-screen">
  <div className="max-w-full mx-auto px-5 lg:pl-12 lg:pr-0 h-full">
    <div className="grid lg:grid-cols-2 items-center h-full">
          {/* LEFT SIDE */}
          <div className="relative z-10 py-10 lg:py-0">
            <img
              src={logoImage}
              alt="Logo"
              className="w-[140px] sm:w-[180px] mb-8"
            />

            <p className="text-base md:text-lg xl:text-xl text-gray-700 mb-6">
              Registration Open for 6th Edition of{" "}
              <span className="text-blue-600 font-semibold">
                Hospex 2026 | Kochi
              </span>
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl leading-tight text-black max-w-[620px]">
              Be part of{" "}
              <span className="text-blue-600 font-bold">India’s</span> most
              <br />
              Influential
              <span className="text-red-500 mx-2">❤</span>
              healthcare
              <br />
              business platform.
            </h1>

            <p className="mt-6 text-xl lg:text-2xl font-semibold text-black">
              6th Edition Hospex
            </p>

            <button className="mt-6 px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-white shadow-lg border border-gray-200 text-base lg:text-lg font-medium hover:shadow-xl transition">
              Book Your Stall
            </button>

            <div className="flex gap-6 lg:gap-10 mt-10 flex-wrap">
              <CounterItem target={100} suffix="+" label="Exhibitors" />
              <CounterItem target={5000} suffix="+" label="B2B Visitors" />
              <CounterItem target={50} suffix="+" label="Global Delegation" />
            </div>
          </div>

          {/* RIGHT SIDE */}
<div className="relative h-full">
                <img
              src={rightBgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[60px] lg:rounded-tl-[90px]"
            />

            {/* Quote */}
            <div className="absolute top-16 xl:top-24 right-6 xl:right-12 text-white max-w-[420px] z-10 hidden lg:block">
              <div className="text-5xl xl:text-6xl font-bold mb-4">“</div>
              <p className="text-lg xl:text-xl text-[#BCD1FF] leading-relaxed mb-6">
                Where healthcare innovation, partnerships,
                and investment come together
              </p>
              <p className="text-base xl:text-lg text-[#BCD1FF] leading-relaxed opacity-90">
                Hospex brings together hospitals, startups,
                medical device brands, pharmaceutical companies,
                AI and digital health innovators.
              </p>
            </div>

<div className="absolute left-1/2 lg:left-[-180px] xl:left-[-280px] top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 z-20">
  <div className="relative flex flex-col items-center overflow-visible">
    <img
      src={doctorImage}
      alt="Doctor"
      className="w-[280px] sm:w-[360px] md:w-[430px] xl:w-[520px] 2xl:w-[600px] max-h-[96vh] object-contain"
    />

    {/* Info Card */}
    <div className="absolute right-[-40px] sm:right-[-90px] xl:right-[-250px] top-[55%] bg-white rounded-3xl shadow-2xl p-4 sm:p-6 w-[220px] sm:w-[400px]">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-10 h-10" />
        <span className="text-base lg:text-3xl font-medium">
          Kochi
        </span>
      </div>

      <div className="border-t pt-4 flex items-center gap-3">
        <CalendarDays className="w-10 h-10" />
        <span className="text-base lg:text-3xl font-medium">
          24,25,26 - September
        </span>
      </div>
    </div>

    {/* CTA */}
    <button className="absolute left-1/2 bottom-[-56px] -translate-x-1/2 z-[100] bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold px-8 sm:px-12 xl:px-16 py-4 rounded-full shadow-2xl transition whitespace-nowrap">
      GET YOUR FREE PASS
    </button>
  </div>
</div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default HospexHero;