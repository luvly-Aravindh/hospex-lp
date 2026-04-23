import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const columns = [
  "Features",
  "Title Partner",
  "Co Powered By",
  "Associate Partner",
  "Platinum",
  "Gold",
  "Silver",
  "Bronze",
];

const rows = [
  {
    feature: "Branding Size (Backdrops)",
    values: ["Large", "Large", "Large", "Medium", "Medium", "Medium", "Small"],
  },
  {
    feature: "Logo on All Creatives",
    values: [true, true, true, true, true, "Limited", "Limited"],
  },
  {
    feature: "Website Listing + Backlink",
    values: [true, true, true, true, true, true, true],
  },
  {
    feature: "Opening Ceremony Recognition",
    values: [true, true, true, true, false, false, false],
  },
  {
    feature: "Closing Ceremony & Hospex Awards",
    values: [true, true, true, true, true, true, true],
  },
  {
    feature: "Keynote / Speaking Slot",
    values: ["Keynote", "Leadership Talk", "Panel", "Panel", false, false, false],
  },
  {
    feature: "Emcee Mentions",
    values: ["Sessions", "Sessions", "Sessions", "3–5", "2–3", "1–2", false],
  },
  {
    feature: "Social Media Promotions",
    values: [
      "Priority + Boost",
      "High",
      "High",
      "Standard",
      "Standard",
      "Limited",
      "Limited",
    ],
  },
  {
    feature: "Email Marketing Inclusion",
    values: ["Priority", "Priority", "Included", "Included", "Included", "Limited", false],
  },
  {
    feature: "Exclusive Promo Video",
    values: [true, true, true, false, false, false, false],
  },
  {
    feature: "Video Coverage at Stall",
    values: [true, true, true, true, false, false, false],
  },
  {
    feature: "Podcast Feature",
    values: [true, true, true, true, "Optional", false, false],
  },
  {
    feature: "Exhibition Booth",
    values: ["Premium Large", "Premium", "Premium", "Standard", "Standard", "Basic", "Basic"],
  },
  {
    feature: "Booth Location Advantage",
    values: ["Prime", "Prime", "Prime", "Priority", false, false, false],
  },
  {
    feature: "LED Screen Ads (Venue)",
    values: [true, true, true, false, false, false, false],
  },
  {
    feature: "Delegate Kit Inserts",
    values: [true, true, true, true, true, true, true],
  },
  {
    feature: "Delegate Kit Branding",
    values: [true, true, true, true, false, false, false],
  },
  {
    feature: "Speakers Lounge Branding",
    values: [true, true, true, false, false, false, false],
  },
  {
    feature: "Access to VIP / CXO Networking",
    values: ["Priority", "High", "High", "Medium", "Limited", "Limited", false],
  },
  {
    feature: "Lead Generation Support",
    values: ["Premium", "High", "High", "Standard", "Basic", "Basic", false],
  },
  {
    feature: "Post Event Report + Leads",
    values: ["Full Access", "Full Access", "Full Access", "Limited", "Limited", false, false],
  },
];

const renderValue = (value) => {
  if (value === true) {
    return (
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
        <Check className="w-4 h-4 mx-auto text-black" strokeWidth={2.5} />
      </motion.div>
    );
  }

  if (value === false) {
    return (
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
        <X className="w-4 h-4 mx-auto text-red-500" strokeWidth={2.5} />
      </motion.div>
    );
  }

  return <span>{value}</span>;
};

export default function PartnershipComparison() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-600 uppercase text-xs tracking-[0.25em] mb-4">
            PARTNERSHIPS
          </p>

          <h2 className="text-3xl md:text-5xl font-medium text-black">
            Exhibitor Benefits & Partnership Comparison
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[24px] border border-gray-200 shadow-sm">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className={`px-5 py-5 text-xs uppercase font-semibold tracking-wide transition-all duration-300 hover:bg-blue-700 ${
                      index === 0 ? "text-left" : "text-center"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: rowIndex * 0.03 }}
                  viewport={{ once: true }}
                  className={`transition-all duration-300 hover:bg-blue-50 ${
                    rowIndex % 2 === 0 ? "bg-[#eef4fb]" : "bg-[#f8f8f8]"
                  }`}
                >
                  <td className="px-5 py-4 text-sm font-medium text-gray-900">
                    {row.feature}
                  </td>

                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className="px-4 py-4 text-center text-sm text-gray-700"
                    >
                      {renderValue(value)}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}