import logo from "../assets/Logo.png";
import surch from "../assets/surch.png";
import shopinBag from "../assets/shop.png";
import bars from "../assets/bars.png";
import { useState } from "react";

const Header = () => {
  const [isblock, setBlock] = useState<boolean>(true);
  const showMenuResponsive = isblock ? "" : "h-[350px]  transition-all";
  return (
    <>
      <div className="box-header flex justify-center  py-8 relative overflow-hidden">
        <div className="container max-md:max-h-full  max-md:h-[70px] max-sm:h-[100px] border border-[#c8d9ed7a] bg-[#ffffff21] flex justify-between items-center rounded-lg px-[13px] shadow-2xl">
          <div className="my-5  cursor-pointer ">
            <img src={logo} alt="logo"></img>
          </div>
          <nav className="max-md:hidden">
            <ul className="my-5 flex gap-8 flex-wrap items-center justify-center">
              <li className="capitalize text-[white]">
                <a href="">home</a>
              </li>
              <li className="capitalize text-[white]">
                <a href="" className="flex items-center justify-center">
                  <span>Plants Type</span>
                </a>
              </li>
              <li className="capitalize text-[white]">
                <a href="">More</a>
              </li>
              <li className="capitalize text-[white]">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="rith-menu ">
            <div className=" my-5 flex items-center justify-center gap-8  flex-wrap">
              <div className="cursor-pointer">
                <img src={surch} alt="search" />
              </div>
              <div className="cursor-pointer">
                <img src={shopinBag} alt="shopingBag" />
              </div>
              <div
                onClick={() => setBlock(!isblock)}
                className="cursor-pointer md:hidden"
              >
                <img src={bars} alt="bars-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${showMenuResponsive} overflow-hidden w-full relative  transition-all`}
      >
        <div className="md:hidden rounded-lg text-white absolute bg-[#293821] w-full top-[0px] py-10 my-5 ">
          <ul className=" flex gap-y-10 flex-col justify-center items-center">
            <li className="capitalize text-[white]">
              <a href="">home</a>
            </li>
            <li className="capitalize text-[white]">
              <a href="" className="flex items-center justify-center">
                <span>Plants Type</span>
              </a>
            </li>
            <li className="capitalize text-[white]">
              <a href="">More</a>
            </li>
            <li className="capitalize text-[white]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
