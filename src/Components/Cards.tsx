import bl from "../assets/bl.png";
import tl from "../assets/tr.png";
import circleCard from "../assets/card.png";
import bag from "../assets/bag 3.png";
import Testimonial from "./sousComponent/Testimonial";
import OurBest from "./sousComponent/OurBest";
import { motion } from "framer-motion";

// ----------------------------------------------
import peaufleur1 from "../assets/peau-feu-1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card7.png";

const Cards = () => {
  const Cards = [
    {
      img: peaufleur1,
    },
    {
      img: card2,
    },
    {
      img: card3,
    },
    {
      img: card4,
    },
    {
      img: card5,
    },
    {
      img: card6,
    },
  ];
  return (
    <div className="bg-[#2f4530] flex flex-col justify-center items-center px-4 ">
      {/* SECTION TITLE */}
      <div className=" py-[76px] relative flex justify-center items-center font-bold text-white capitalize text-[20px] mb-[130px]">
        <img src={bl} alt="" className="h-[50px] " />
        <p className="text-[33px] max-md:text-[25px] max-sm:text-[15px]">
          Our Trendy plants
        </p>
        <img src={tl} alt="" className="h-[50px]" />
      </div>
      {/* FIN  SECTION TITLE */}
      <div className="container flex flex-wrap justify-center items-center ">
        {Cards.map((element) => {
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
              className="  w-[512px] card-shoping  cursor-pointer  hover:translate-y-[-13px] transition-all "
            >
              <div className=" relative  mb-[50px]">
                <div className="max-w-full max-md:w-[100%]  ">
                  <img src={circleCard} alt="circle Card" className="w-full" />
                </div>
                <div className="] absolute top-[-80px] left-[0px] ">
                  <img
                    className="w-[1200px] max-md:w-[400px]"
                    src={element.img}
                    alt="peau de fleur1"
                  />
                </div>
                <div className="card-shoping-content  text-white absolute  left-20 top-[350px] max-md:top-[130px] max-md:left-10 max-sm:top-[160px] ">
                  <div className="content relative max-md:top-[50px] ">
                    <h2 className="text-[23px] my-[20px]">Calathea plant</h2>
                    <p>
                      Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                      elit
                    </p>
                  </div>
                  <div className="action flex items-center relative max-ms:top-[60px] max-md:top-[100px]">
                    <p className="text-[25px]">Rs. 359/-</p>
                    <button className="mt-[10px] relative left-[160px] max-md:left-[40px] border w-[64px] p-[15px] h-[64px] rounded-lg ml-[32px]">
                      <img src={bag} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* SECTION TITLE */}
      <div className=" py-[76px] relative flex justify-center items-center font-bold text-white capitalize text-[20px] mb-[130px]">
        <img src={bl} alt="" className="h-[50px] " />
        <p className="text-[33px] max-md:text-[25px]  max-sm:text-[18px]">
          Customer Review
        </p>
        <img src={tl} alt="" className="h-[50px]" />
      </div>
      {/* FIN  SECTION TITLE */}
      <Testimonial />
      {/* SECTION TITLE */}
      <div className=" py-[100px] relative flex justify-center items-center font-bold text-white capitalize text-[20px] mb-[130px]">
        <img src={bl} alt="" className="h-[50px] " />
        <p className="text-[33px] max-md:text-[25px] max-sm:text-[18px]">
          Our Best o2
        </p>
        <img src={tl} alt="" className="h-[50px]" />
      </div>
      {/* FIN  SECTION TITLE */}
      <OurBest />
    </div>
  );
};

export default Cards;
