import React from "react";
import flors from "../../assets/flors.png";
import { motion } from "framer-motion";
const OurBest = () => {
  return (
    <motion.div
      initial="hidden"
      //valeur final
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="mb-[314px] lows"
    >
      <div className="  text-white bg-[#ffffff2c] backdrop-blur-sm  rounded-[100px] flex  justify-between flex-wrap items-center relative  ">
        <div className="img bottom-[-70px] w-[400px] relative ">
          <img src={flors} alt="peau de fleur" />
        </div>
        <div className="flex flex-col mt-[60px] m-10 ">
          <h1 className="font-bold text-[26px]">
            We Have Small And Best O2 Plants Collection’s
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="my-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="border w-[217px] h-[64px] rounded-lg">
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OurBest;
