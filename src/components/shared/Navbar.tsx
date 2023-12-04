import Image from "next/image";
import Link from "next/link";
import LogoMobile from "./../../assets/img/mazdaLogoMobile.svg";
import Profile from "./../../assets/img/profile.svg";
import Search from "./../../assets/img/search.svg";
const Navbar = () => {
  return (
    <header className="w-full container mx-auto flex bg-[#212121] justify-between px-3 md:px-0 shadow shadow-gray-600 h-[50px] md:h-[105px]">
      <div className="md:w-1/6 flex justify-center items-center">
        <Image height={30} width={30} src={LogoMobile} alt={"mazda"} className="md:hidden"/>
        <Image height={50} width={54} src={LogoMobile} alt={"mazda"} className="hidden md:block"/>
      </div>
      <div className="w-4/6 hidden md:flex items-center justify-center">
        <nav className="w-full flex justify-center items-center ">
          <ul className="w-fit text-white flex ">
            <Link
              href="/board"
              className="px-4 py-2 duration-100 hover:border-b"
            >
              BOARDS
            </Link>
            <Link
              href="/"
              className="px-4 py-2 duration-100 hover:border-b"
            >
              HOME
            </Link>
            <Link
              href="/reel"
              className="px-4 py-2 duration-100 hover:border-b"
            >
              REELS
            </Link>
          </ul>
        </nav>
      </div>
      <div className="md:w-1/6 flex flex-wrap items-center justify-center">
        <button className="border-0 p-3 outline-0">
          <Image height={21} width={21} src={Profile} alt={"profile"} />
        </button>
        <button className="border-0 p-3 outline-0">
          <Image height={21} width={21} src={Search} alt={"profile"} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
