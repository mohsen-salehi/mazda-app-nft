import React from 'react';
import Image from "next/image";
import prevImage from "@/assets/img/PreviousWinnerexperience.svg"
import CupImg from "@/assets/img/cup and lines.svg"
function Index() {
    return (
        <div className="w-full mt-4 md:mt-0 md:h-[400px] flex flex-wrap">
            <div className="w-full my-4 scale-150 md:scale-100" >
                <Image src={prevImage} alt={"PreviousWinnerExperience"} />
            </div>
            <div className="w-full my-4 scale-150 md:scale-100" >
                <Image src={CupImg} alt={"CupImg"} />
            </div>
        </div>
    );
}

export default Index;