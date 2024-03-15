import play from "../assets/play.png";
import etoils from "../assets/etoiles.png";
import pp from "../assets/pp-1.png";
import circleCard from "../assets/card.png";
import peaufleur1 from "../assets/peau-feu-1.png";
import peaufleur2 from "../assets/peua-fleur-1.png";
import bl from "../assets/bl.png";
import tl from "../assets/tr.png";
import bag from "../assets/bag 3.png";
import capImg from "../assets/CAP-1.png";
import { motion } from "framer-motion";

export default function SectionOne() {
  return (
    <section className="flex justify-center  ">
      <div className="container flex py-8 flex-col  ">
        <div className="banner flex justify-between flex-wrap">
          <div className="banner-left">
            <motion.div
              //valleur initial
              initial="hidden"
              //valeur final
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="top-banner"
            >
              <h1 className="banner-title text-white font-bold  text-[100px] max-md:text-[70px]">
                Breath Natureal
              </h1>
              <p className="text-white banner-text my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
              <div className="box-buttton flex  gap-9 flex-wrap ">
                <button className="banner-button border w-[217px] h-[64px] rounded-lg text-white ">
                  Explore
                </button>
                <div className="text-white flex items-center gap-4 ">
                  <button className="border banner-button-play w-[64px] h-[64px] flex justify-center items-center rounded-full">
                    <img src={play} alt="button play" />
                  </button>
                  <p>Live Demo...</p>
                </div>
              </div>

              <div className="card animation mt-[246px] mb-32 text-white bg-[#ffffff2c] backdrop-blur-sm w-[409px] max-md:w-full rounded-[32px] p-[43px]">
                <div className="header flex items-center mb-[22px] ">
                  <div className="img">
                    <img src={pp} alt="" />
                  </div>
                  <div className="title ml-10">
                    <p className="text-[27px]">alena Patel</p>
                    <img src={etoils} alt="etoils" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor <br /> incididunt...
                </p>
              </div>
            </motion.div>
          </div>
          <div className="banner-rith ">
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
              className=" banner-cart relative  mb-[50px]"
            >
              <div className="  max-w-full max-md:w-[300px] ">
                <img src={circleCard} alt="circle Card" className="w-full" />
              </div>
              <div className="] absolute top-[-80px] left-[0px] ">
                <img
                  className="w-[1200px] "
                  src={peaufleur1}
                  alt="peau de fleur1"
                />
              </div>
              <div className="content text-white absolute  left-20 top-[420px] max-md:top-[160px] max-md:left-10">
                <p>Trendy House Plant</p>
                <h2 className="text-[23px] my-[20px]">Calathea plant</h2>
                <button className="border banner-card-button w-[217px] h-[64px] rounded-lg">
                  Buy Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SECTION TITLE */}
        <div className="relative flex justify-center items-center font-bold text-white capitalize text-[20px] mb-[130px]">
          <img src={bl} alt="" className="h-[50px] " />
          <p className="text-[33px] max-md:text-[25px]  max-sm:text-[18px]">
            Our Trendy plants
          </p>
          <img src={tl} alt="" className="h-[50px]" />
        </div>
        {/* FIN  SECTION TITLE */}
        <div className="my-[50px] max-md:px-[25px] big-card  text-white bg-[#ffffff2c] backdrop-blur-sm px-[125px] rounded-[100px] flex  justify-between flex-wrap relative  ">
          <div className="img bottom-[100px] w-[500px] relative ">
            <img src={peaufleur2} alt="peau de fleur" />
          </div>
          <div className="content flex flex-col mt-[60px] max-md:bottom-[90px] mb-[10px]  relative">
            <h1 className="font-bold text-[26px]">For Small Decs Ai Plat</h1>
            <p className="my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className=" mb-[24px]">Rs. 599/-</div>
            <div className="action flex  items-center flex-wrap max-md:justify-center">
              <button className="border banner-card-button  w-[217px] h-[64px] rounded-lg">
                Buy Now
              </button>
              <button className="mt-[10px] border w-[64px] p-[15px] h-[64px] rounded-lg ml-[32px]">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* big-card 2 */}
        <div className="my-[50px] big-card  text-white bg-[#ffffff2c] backdrop-blur-sm px-[125px] max-md:px-[25px] rounded-[100px] flex  justify-between flex-wrap relative ">
          <div className="content flex flex-col mt-[60px]">
            <h1 className="font-bold text-[26px]">For Small Decs Ai Plat</h1>
            <p className="my-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className=" mb-[24px]">Rs. 599/-</div>
            <div className="action flex  items-center flex-wrap max-md:justify-center ">
              <button className="border banner-card-button  w-[217px] h-[64px] rounded-lg">
                Buy Now
              </button>
              <button className="mt-[10px] border w-[64px] p-[15px] h-[64px] rounded-lg ml-[32px]">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
          <div className="img bottom-[100px] max-md:bottom-[0px] w-[500px] relative ">
            <img src={capImg} alt="peau de fleur" />
          </div>
        </div>
      </div>
    </section>
  );
}
