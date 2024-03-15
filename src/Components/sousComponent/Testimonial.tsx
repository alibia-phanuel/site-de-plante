import React from "react";
import cardTesti from "../../assets/testi-card.png";
import prof1 from "../../assets/prof1.png";
import prof2 from "../../assets/prof2.png";
import prof3 from "../../assets/prof3.png";
import toil from "../../assets/etoiles.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const Testimonials = [
    {
      img: prof1,
      name: "Maxn Raval",
    },
    {
      img: prof2,
      name: "venely k",
    },
    {
      img: prof3,
      name: "Lii thakur",
    },
  ];

  return (
    <div className=" T container flex  flex-wrap justify-center gap-8">
      {Testimonials.map((element) => {
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
            className="text-white transition-all flex flex-wrap "
          >
            <div className="img w-[400px]  max-ms:w-full hover:translate-y-[-13px] transition-all max-w-full  flex items-center relative">
              <img src={cardTesti} alt="" className="testi-profils" />
              <div className="profil  left-[50px] max-sm:gap-y-2 absolute flex flex-col gap-y-4">
                <div
                  className="flex gap-x-4
                 items-center rounded-full "
                >
                  <img
                    src={element.img}
                    alt="photo de profil"
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="name">{element.name}</div>
                    <div className="mt-2">
                      <img src={toil} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" ">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do <br />
                  eiusmod tempor incididunt <br />
                  ut labore et dolore magna aliqua. Ut <br />
                  enim ad minim veniam,
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Testimonial;
