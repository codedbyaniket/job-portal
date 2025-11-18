import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-14">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-linear-to-br from-purple-800 via-purple-900 to-black text-white py-20 rounded-2xl shadow-xl relative mx-3 overflow-hidden"
      >
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-900/20 to-transparent blur-3xl"></div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4"
        >
          Find the Job That <span className="text-blue-400">Fits You</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center max-w-xl mx-auto px-6 text-gray-300 text-sm md:text-base leading-relaxed"
        >
          Over <strong>10,000+ career opportunities</strong> waiting for you. Search, apply, and start your journey.
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-3 max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 mt-10"
        >
          <div className="flex items-center bg-white/5 rounded px-3 py-2 flex-1">
            <img src={assets.search_icon} className="h-5 opacity-80 mr-2" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="bg-transparent w-full outline-none text-sm text-white placeholder-gray-300"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center bg-white/5 rounded px-3 py-2 flex-1">
            <img src={assets.location_icon} className="h-5 opacity-80 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full outline-none text-sm text-white placeholder-gray-300"
              ref={locationRef}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={onSearch}
            className="bg-blue-600 hover:bg-blue-700 transition font-medium px-6 py-2.5 rounded-lg text-white whitespace-nowrap"
          >
            Search
          </motion.button>
        </motion.div>
      </motion.div>

      {/* BRANDS */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="border border-gray-300 shadow-md mx-3 mt-6 p-6 rounded-xl bg-white/30 backdrop-blur-lg"
      >
        <div className="flex justify-center gap-8 md:gap-14 flex-wrap items-center">
          <p className="font-medium text-gray-700">Trusted by:</p>
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.microsoft_logo} />
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.walmart_logo} />
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.accenture_logo} />
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.samsung_logo} />
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.amazon_logo} />
          <img className="h-6 grayscale hover:grayscale-0 transition" src={assets.adobe_logo} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
