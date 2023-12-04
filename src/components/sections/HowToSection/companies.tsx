import React from 'react';
import Image from "next/image";
import ArrowTopRight from "@/assets/img/arrowTopRight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
function Companies() {
    return (
        <Swiper  slidesPerView={8} spaceBetween={10} autoplay={{
            delay: 400,
        }} loop={true} modules={[Navigation , Autoplay]} className="flex overflow-hidden my-10  w-full p-2 border-y">
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white text-center  !flex">
                Fantom Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                A-Star Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Key3 Eventos Tokyo
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Nill Developers
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Web3 Global Hackathon 2023
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Bunzz Company
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Mitsubishi Estate
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Unchain
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
            <SwiperSlide className="p-2 items-center !whitespace-nowrap mx-1 px-3 border-r text-xs text-white  !w-fit !text-center  !flex">
                Heal-III
                <Image src={ArrowTopRight} className="mx-2" alt={"companies"} width={12} height={12}/>
            </SwiperSlide>
        </Swiper>
    );
}

export default Companies;