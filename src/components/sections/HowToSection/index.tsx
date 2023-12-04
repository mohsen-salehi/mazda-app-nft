import React from 'react';
import Companies from "@/components/sections/HowToSection/companies";
import HowTo from "@/components/sections/HowToSection/HowTo";



function HowToSection() {


    return (
        <div className="w-full flex flex-wrap ">
            <div className=" hidden md:flex">
                <Companies/>
            </div>
            <HowTo/>
        </div>
    );
}

export default HowToSection;