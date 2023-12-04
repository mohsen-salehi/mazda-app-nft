import React from 'react';
import Image from "next/image";
import LeftCar from "@/assets/img/car3.svg"
import CenterCar from "@/assets/img/car2.svg"
import RightCar from "@/assets/img/car1.svg"
import LeftIconL from "@/assets/img/leftIconL.svg"
import LeftIconR from "@/assets/img/LeftIconR.svg"
import CenterIconL from "@/assets/img/CenterIconL.svg"
import CenterIconR from "@/assets/img/CenterIconR.svg"
import RightIconL from "@/assets/img/RightIconL.svg"
import RightIconR from "@/assets/img/RightIconR.svg"
import styles from "./styles.module.css"
function CarVideos() {
    return (
        <div className="w-full !relative min-h-[350px] md:min-h-[800px]  md:static my-20 flex flex-wrap justify-evenly items-end">
            <div className="min-h-[700px] absolute md:static -left-20 -top-[200px] scale-50 md:scale-100 flex flex-wrap items-end w-[382px]">
                <div className="flex justify-between px-5 my-10 w-full">
                    <Image src={LeftIconL} alt={""}/>
                    <span className="font-bold text-2xl py-3 text-white">Jason KDB8</span>
                    <Image src={LeftIconR} alt={""}/>
                </div>
               <div className="w-full flex justify-center">
                   <Image src={LeftCar} alt={""}  className="overflow-hidden  shadow shadow-amber-50 border-2 p-1 bg-gray-500 rounded-xl"/>
               </div>
            </div>
            <div className={`${styles.shadowManual} min-h-[800px] absolute  md:static z-10 -top-[250px] flex flex-wrap scale-[0.6] md:scale-100 justify-between items-end w-[406px]`}>
                <div className="flex justify-between px-5 my-10 w-full">
                    <Image src={CenterIconL} alt={""}/>
                    <span className="font-bold text-2xl py-3 text-white">Alex Karson</span>
                    <Image src={CenterIconR} alt={""}/>
                </div>
                <Image src={CenterCar} alt={""}  className="overflow-hidden  shadow shadow-amber-50  border-2 p-1 bg-gray-500  rounded-xl"/>
            </div>
            <div className="min-h-[700px] absolute md:static -right-20 -top-[200px] flex flex-wrap scale-50 md:scale-100 justify-between items-end w-[382px]">
                <div className="flex justify-between px-5 my-10 w-full">
                    <Image src={RightIconL} alt={""}/>
                        <span className="font-bold text-2xl py-3 text-white">Jason KDB8</span>
                    <Image src={RightIconR} alt={""}/>
                </div>
                <Image src={RightCar} alt={""}  className="overflow-hidden shadow shadow-amber-50 border-2 p-1 bg-gray-500  rounded-xl"/>
            </div>
        </div>
    );
}

export default CarVideos;