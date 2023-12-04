import React, {useState} from 'react';
import ExploreIcon from "@/assets/img/ExplorIcon.svg"
import TrendsIcon from "@/assets/img/TrendsIcon.svg"
import Image from "next/image";
import CenterCar from "@/assets/img/car2.svg";
import RightCar from "@/assets/img/carMazda.png";
import HeartIcon from "@/assets/img/heartIcon.svg";
import ShareIcon from "@/assets/img/shareIcon.svg";
function ReelsView() {
    const [activeBtn , setActiveBtn] = useState<"Explore" | "Trends">("Explore")
    return (
        <section className="w-full border flex min-h-screen items-stretch">
            <div className="w-1/3 flex border"></div>
            <div className="w-1/3 flex flex-wrap p-2 border content-start justify-center">
                <nav className="flex-wrap justify-between  items-start flex border w-fit rounded-xl p-2">
                    <button onClick={() => setActiveBtn("Explore")} className={`${activeBtn === "Explore" ? "bg-white text-black" : "text-white hover:bg-gray-800"} duration-500 p-3 flex justify-center items-center  w-[150px] mx-1 rounded-xl h-[50px]  `}>
                        <Image src={ExploreIcon} alt={"explore"} height={26} width={26} />
                        Explore
                    </button>
                    <button onClick={() => setActiveBtn("Trends")} className={`${activeBtn === "Trends" ? "bg-white text-black" : "text-white hover:bg-gray-800"} duration-500 p-3  flex justify-center items-center w-[150px] mx-1 rounded-xl h-[50px] `}>
                        <Image src={TrendsIcon} alt={"Trends"} height={24} width={18} />
                        Trends
                    </button>
                </nav>
                <div className="w-full flex flex-wrap mt-3 p-2 justify-center">
                   <div className="w-fit flex flex-wrap relative">
                       <Image src={CenterCar} alt={""}  className="overflow-hidden  shadow  rounded-xl"/>
                       <div className="w-full p-4 flex flex-wrap absolute bottom-0">
                           <div className="w-full pb-4  flex justify-end">
                                <div className="backdrop-blur-sm bg-gray-800 bg-opacity-30 p-1 flex justify-center content-evenly flex-wrap w-[47px] h-[120px] rounded-3xl">
                                    <Image src={HeartIcon} alt={"like"}/>
                                    <div className="text-xs text-white text-bold">27.9K</div>
                                    <Image src={ShareIcon} alt={"share"}/>
                                </div>
                           </div>
                           <div className="backdrop-blur-sm bg-gray-800 bg-opacity-20 shadow w-full h-[100px]  rounded-xl flex ">
                                <div className="w-1/4  flex items-center  p-3 overflow-hidden">
                                    <Image src={RightCar} alt={""} width={67} height={67} className="overflow-hidden  shadow rounded-xl"/>
                                </div>
                               <div className="w-3/4  p-3 text-white flex flex-wrap h-full">
                                    <div className='w-full '><span className="font-bold">Lorem Ipsum .</span> <button className="text-xs cursor-pointer">Follow</button></div>
                                   <div className="w-full  line-clamp-2 overflow-hidden text-xs h-[34px]  relative">
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                       <button className="text-xs cursor-pointer absolute right-4 bottom-0">More</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
            <div className="w-1/3 flex border"></div>
        </section>
    );
}

export default ReelsView;