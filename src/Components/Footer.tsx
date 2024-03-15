import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[#222C1D] w-full flex justify-center text-white">
      <div className="container m-4">
        <div className="flex justify-between flex-wrap ">
          <div>
            <div className="logo mt-[80px] mb-[43px]">
              <img src={logo} alt="logo" />
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-[80px] mb-[40px] text-[34px]">
              Quick Link’s
            </h2>
            <div className="my-[12px] capitalize text-[25px]">
              <a href="">Home </a>
            </div>
            <div className="my-[12px] capitalize text-[25px]">
              <a href="">Type’s Of plant’s </a>
            </div>

            <div className="my-[12px] capitalize text-[25px]">
              <a href=""> Contact</a>
            </div>

            <div className="my-[12px] capitalize text-[25px]">
              <a href="">Privacy </a>
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-[80px] mb-[40px] text-[34px]">
              For Every Update.
            </h2>
            <form
              action=""
              id="form"
              className="border-2  flex justify-between w-[562px] max-md:w-[300px] flex-wrap p-1 rounded-md"
            >
              <input
                className="bg-transparent w-[40%] outline-none ml-[20px]"
                type="email"
                placeholder="Enter Email"
                required
              />
              <button
                type="submit"
                className="h-[64px] w-[165px] max-md:w-[100px] bg-white text-[#000000] rounded-md"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap my-[100px]">
          <div className="font-bold text-[34px] gap-x-8 flex">
            <a href="">FB</a>
            <a href="">TW</a>
            <a href="">LI</a>
          </div>
          <div className="text-[20px] relative right-[340px]  max-md:right-[0px]">
            planto © all right reserve
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
