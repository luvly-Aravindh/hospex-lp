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
      <h3 className="text-4xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-500 mt-1">{label}</p>
    </div>
  );
};

const HospexHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] min-h-screen">
      <div className="max-w-full mx-auto px-6 lg:pl-12 lg:pr-0">
        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          {/* LEFT SIDE */}
          <div className="relative z-10">
            <img src={logoImage} alt="Logo" className="w-[180px] mb-10" />

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Registration Open for 6th Edition of{" "}
              <span className="text-blue-600 font-semibold">
                Hospex 2026 | Kochi
              </span>
            </p>

            <h1 className="text-4xl md:text-5xl leading-tight text-black max-w-[620px]">
              Be part of{" "}
              <span className="text-blue-600 font-bold">India’s</span> most
              <br />
              Influential
              <span className="text-red-500 mx-2">❤</span>
              healthcare
              <br />
              business platform.
            </h1>

            <p className="mt-8 text-2xl font-semibold text-black">
              6th Edition Hospex
            </p>

            <button className="mt-8 px-8 py-4 rounded-full bg-white shadow-lg border border-gray-200 text-lg font-medium hover:shadow-xl transition">
              Book Your Stall
            </button>

            {/* Animated Counters */}
            <div className="flex gap-10 mt-14 flex-wrap">
              <CounterItem target={100} suffix="+" label="Exhibitors" />
              <CounterItem target={5000} suffix="+" label="B2B Visitors" />
              <CounterItem target={50} suffix="+" label="Global Delegation" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative min-h-screen">
            <img
              src={rightBgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[90px]"
            />

            {/* Quote */}
            <div className="absolute top-24 right-12 text-white max-w-[500px] z-10 hidden lg:block">
              <div className="text-6xl font-bold mb-4">“</div>
              <p className="text-xl text-[#BCD1FF] leading-relaxed mb-6">
                Where healthcare innovation, partnerships,
                and investment come together
              </p>
              <p className="text-lg text-[#BCD1FF] leading-relaxed opacity-90">
                Hospex brings together hospitals, startups, medical device brands,
                pharmaceutical companies, AI and digital health innovators.
              </p>
            </div>

            {/* Doctor */}
            <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <img
                src={doctorImage}
                alt="Doctor"
                className="max-h-full object-contain"
              />

              {/* Info Card */}
              <div className="absolute right-[-200px] top-[52%] bg-white rounded-3xl shadow-2xl p-6 w-[260px]">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">Kochi</span>
                </div>

                <div className="border-t pt-5 flex items-center gap-3">
                  <CalendarDays className="w-5 h-5" />
                  <span className="text-lg font-medium">
                    24,25,26 - September
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="absolute bottom-[-55px] bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-16 py-5 rounded-full shadow-2xl transition">
                GET YOUR FREE PASS
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HospexHero;