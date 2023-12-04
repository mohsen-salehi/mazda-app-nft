// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";
import CarImage from "@/assets/img/mazda-mx-5-rf-side-view 1.svg"
const HeroSlider = () => {
  return (
      <Swiper navigation={false} modules={[Navigation]} className="md:h-[800px] w-full">
        <SwiperSlide>
            <div className="w-full flex flex-wrap  ">
                <Image
                    className="w-full"
                    src={CarImage}
                    alt="mazda car"
                    loading="lazy"

                />
                <div className="w-full text-center text-white text-4xl hidden md:block">MAZDA MX-5 RF</div>
            </div>
        </SwiperSlide>
          <SwiperSlide>
              <div className="w-full flex flex-wrap  ">
                  <Image
                      className="w-full"
                      src={CarImage}
                      alt="mazda car"
                      loading="lazy"

                  />
                  <div className="w-full text-center text-white text-4xl hidden md:block">MAZDA MX-5 RF</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="w-full flex flex-wrap  ">
                  <Image
                      className="w-full"
                      src={CarImage}
                      alt="mazda car"
                      loading="lazy"

                  />
                  <div className="w-full text-center text-white text-4xl hidden md:block">MAZDA MX-5 RF</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="w-full flex flex-wrap  ">
                  <Image
                      className="w-full"
                      src={CarImage}
                      alt="mazda car"
                      loading="lazy"

                  />
                  <div className="w-full text-center text-white text-4xl hidden md:block">MAZDA MX-5 RF</div>
              </div>
          </SwiperSlide>
      </Swiper>

  );
};

export default HeroSlider;
