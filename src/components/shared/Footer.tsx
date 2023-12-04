import Image from "next/image";
import Call from "./../../assets/img/Call.svg";
import Gmail from "./../../assets/img/Gmail.svg";
import Logo from "./../../assets/img/logo.svg";
const Footer = () => {
  return (
    <footer className="w-full container mx-auto overflow-hidden flex items-center bg-[#212121] h-[326px]">
      <div className="w-1/4 flex flex-wrap h-full content-start  justify-center p-7  ">
        <div className="w-full text-2xl py-3 flex flex-wrap items-center ">
          <Image alt={"Logo"} src={Logo} height={59} width={65} />
          <span className="text-white p-2">
            Mazda <br />
            Company
          </span>
        </div>
        <div className="w-full flex justify-start content-center flex-wrap">
          <h4 className="text-white">Subscribe the news</h4>
          <label className="flex w-full flex-wrap py-3 pe-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-1 bg-transparent border rounded w-full"
            />
          </label>
          <div className="flex w-full ">
            <button className="bg-blue-600 text-white rounded py-1 px-3">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4  flex flex-wrap h-full content-start  justify-center p-7  pt-10">
        <h3 className="text-white text-2xl w-full mb-4">Information</h3>
        <ul className="w-full flex flex-wrap">
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
        </ul>
      </div>
      <div className="w-1/4  flex flex-wrap h-full content-start  justify-center p-7  pt-10">
        <h3 className="text-white text-2xl w-full mb-4">Our Services</h3>
        <ul className="w-full flex flex-wrap">
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
          <li className="text-gray-500 w-full py-1">Lorem ipsum</li>
        </ul>
      </div>
      <div className="w-1/4 flex flex-wrap h-full content-start  justify-center p-7  pt-10">
        <h3 className="text-white text-2xl w-full mb-4">Contact us</h3>
        <ul className="w-full flex flex-wrap pt-1 ">
          <li className="text-gray-500 w-full flex  pt-3">
            <span className="h-[25px] flex justify-center items-center w-[25px] border p-1 rounded-full">
              <Image src={Call} alt={"call"} />
            </span>
            <span className="mx-3">+9012345678</span>
          </li>
          <li className="text-gray-500 w-full flex  pt-3">
            <span className="h-[25px] flex justify-center items-center w-[25px] border p-1 rounded-full">
              <Image src={Gmail} alt={"gmail"} />
            </span>
            <span className="mx-3">+9012345678</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
