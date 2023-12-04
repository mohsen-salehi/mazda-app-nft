import React from 'react';
import Image from "next/image";
import HowToMintImage from "@/assets/img/HowToMint.svg";
import Share from "@/assets/img/share.svg";
import OneNumberImage from "@/assets/img/oneImage.svg"
import PaginationMobile from "@/assets/img/paginationBar.svg"
function HowTo() {
    return (
       <>
           <div className="mt-1 md:my-10">
               <Image src={HowToMintImage} className="scale-125 md:scale-100"  alt={"how-to-mint"}/>
           </div>
           <div className="container flex mx-auto  md:-mt-36 text-white justify-between items-center md:h-[400px] p-2">
               <div className="w-full md:w-2/4  px-2 md:px-0 ">
                   <h3 className="font-bold flex items-end -mt-4 md:-mt-0 text-2xl md:text-4xl">
                       <Image src={OneNumberImage} className="md:hidden me-2" alt={"OneNumberImage"} />
                       How To Mint?</h3>
                   <p className="pt-4 font-bold text-xs leading-5 pe-3 text-justify md:text-start">
                       In the first step you need to upload your videos URL that’s about MAZDA company car’s which
                       you’ve uploaded in the Instagram as a “Reels” or in Youtube in the “Youtube Shorts” section or
                       even other social media accounts such as TikTok, Facebook or Twitch in the “REELS” page of our
                       site.
                   </p>
               </div>
               <div className="w-1/3 relative hidden md:block">
                   <div className="w-[228px] bg-blue-500 rounded-xl h-[228px]"></div>
                   <div className="w-[228px] absolute top-[50px] -left-[50px] flex justify-center items-center  backdrop-blur-md bg-sky-50 bg-opacity-20 border rounded-xl h-[228px]">
                       <Image src={Share} alt={"share"} height={84} width={84}/>
                   </div>
               </div>
           </div>
           <div className="w-full flex md:hidden my-5  flex-wrap justify-center items-center ">
               <Image src={PaginationMobile} height={20} alt={"PaginationMobile"}/>
           </div>
           <div className="w-full hidden  md:flex p-2 mt-6 justify-center items-center">
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-purple-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">1</span>
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-gray-900-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">2</span>
               <span className="bg-gradient-to-r from-gray-700 rounded-full to-gray-900-700 h-[35px] w-[35px] flex mx-3 justify-center items-center text-white">3</span>
           </div>

       </>
    );
}

export default HowTo;