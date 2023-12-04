import CameraIcon from "@/components/icons/CameraIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import CreditIcon from "@/components/icons/CreditIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import MiddleIcon from "@/components/icons/MiddleIcon";
import NotifyIcon from "@/components/icons/NotifyIcon";
import PlayerIcon from "@/components/icons/PlayerIcon";
import SolidCameraIcon from "@/components/icons/SolidCameraIcon";
import TurbinIcon from "@/components/icons/TurbinIcon";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div >
      <div className="relative h-fit flex pb-16 pt-0 mt-5">
        {/* top icons */}

        <div className="top-0 ">
          <div className="flex flex-row justify-between">
            <div>
              <div className="absolute z-10 md:top-[60px] top-12 md:left-[75px] scale-[0.35] md:scale-100 rotate-12">
                <CreditIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 md:top-0 -top-10 left-4 md:left-40 scale-[0.35] md:scale-100 rotate-[3deg]">
                <NotifyIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 md:top-[40px] -left-8  -top-12 md:left-[270px] scale-[0.35] md:scale-100 rotate-[0deg]">
                <PlayerIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 left-10 top-12  md:top-[20px]  md:left-[470px] rotate-[-7deg] scale-[0.35] md:scale-100">
                <CameraIcon />
              </div>
            </div>

            {/* MINT NFT */}
            <div className="absolute z-10 text-white top-5 md:top-[80px] left-1/2 transform -translate-x-1/2 text-center">
              <h3>MINT ALL THE</h3>
              <h1 className="text-5xl font-bold">NFT’S</h1>
            </div>

            <div>
              <div className="absolute z-10 right-7 md:right-1/3 -top-12 md:top-[0px] rotate-[7deg] scale-[0.35] md:scale-100">
                <MiddleIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 right-14 top-10 md:right-1/4 md:top-[80px] rotate-[5deg] scale-[0.35] md:scale-100">
                <SolidCameraIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 -right-8 -top-12 md:right-40 md:-top-10  rotate-12 scale-[0.35] md:scale-100 ">
                <HeartIcon />
              </div>
            </div>
            <div>
              <div className="absolute z-10 -right-16 -top-4 md:top-[0px] md:right-0 rotate-12 scale-[0.35] md:scale-100">
                <ChatIcon />
              </div>
            </div>
          </div>

          {/* turbine svg */}
          <div className="flex mt-10 px-6 absolute w-screen ">
            <TurbinIcon />
          </div>
        </div>

        {/* mazda image */}
        <div className="z-2 top-0 mt-14 overflow-hidden container mx-auto">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
