import React from 'react';
import Image from "next/image";
import AboutUsImage from "@/assets/img/About US.svg"
import GiftRight from "@/assets/img/GiftRight.svg"
import GiftLeft from "@/assets/img/GitfLeft.svg"
import styles from "./styles.module.css";
function AboutUs() {
    return (
        <div className="w-full h-[300px] flex flex-wrap justify-center items-center ">
            <div className={`${styles.bg} h-[200px] flex w-full  justify-center`}>
                <Image src={GiftLeft} width={32} height={44} alt={"GiftLeft"}/>
                <Image src={AboutUsImage} className="w-32 md:w-80" width={300} height={60} alt={"AboutUsImage"}/>
                <Image src={GiftRight} width={32} height={44} alt={"GiftRight"}/>
            </div>
            <div className="w-full flex justify-center mt-5 ">
                <div className="w-2/12 items-center flex justify-end relative">
                    <div className=" h-0.5 bg-blue-600 w-full absolute ">

                    </div>
                    <div className="w-2 translate-x-1 h-[85%] z-[2] rounded blur-[2px] bg-blue-600">

                    </div>
                    <div className="w-2 h-full bg-sky-50 bg-opacity-50 z-[3] border backdrop-blur-md">

                    </div>
                </div>
                <p className="font-bold text-justify md:text-start text-[9px] md:text-xs p-2 w-8/12 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
                <div className="w-2/12 items-center flex justify-start relative">
                    <div className=" h-0.5 bg-blue-600 w-full absolute ">

                    </div>
                    <div className="w-2 h-full bg-sky-50 bg-opacity-50 z-[3] border backdrop-blur-md">

                    </div>
                    <div className="w-2 -translate-x-1 h-[85%] z-[2] rounded blur-[2px] bg-blue-600">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;