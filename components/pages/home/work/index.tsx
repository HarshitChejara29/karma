"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import InquiryForm from "@/components/forms/inquiry";


const Work = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


    return (
    <section className="text-white body-font overflow-hidden lg:bg-[#0C0F18] bg-[#201F28]">
        <div className="container lg:px-28 px-8 lg:py-24 mt-10 mx-auto">
            <div className="flex flex-wrap -m-12">
                <div className="p-12 md:w-1/2 flex flex-col items-center lg:text-left text-center">
                    <div className="lg:mr-20">
                    <h2 className="lg:text-5xl text-3xl title-font font-medium text-white lg:mb-8 mb-5" data-aos="slide-up">Work & Earn With <br/>100-KARMA</h2>
                    <p className="leading-relaxed lg:mb-8 mb-5 text-gray-400" data-aos="slide-up">Earn upto Rs: 30,000/- as extra income per month. Become a 100-KARMA  Agent today & start earning on your own terms. Make it a full time, part time or flexi time earning opportunity. The 100-KARMA  Agent program is for everyone looking at earning extra money with freedom & flexibility.</p>
                    <p className="leading-relaxed lg:mb-8 mb-5 text-xl font-bold" data-aos="slide-up">Become a 100-KARMA Sales & Service Agent today & lead the way to a digital revolution.</p>
                    <p className="leading-relaxed mb-8 text-gray-400" data-aos="slide-up">_ Aria Zinanrio</p>
                    <a className="inline-flex items-center hidden md:block" data-aos="slide-up">
                    <span className="flex lg:gap-5 md:gap-2">
                        <Image alt="user1" src="/user1.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <Image alt="user2" src="/user2.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <Image alt="user3" src="/user3.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <Image alt="user4" src="/user4.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <Image alt="playbutton" src="/playbutton.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                    </span>
                    </a>
                    </div>
                </div>
                <div className="lg:p-16 p-10 md:py-28 py-20 lg:w-1/2 md:w-1/2 w-full flex flex-col items-center">
                    <InquiryForm/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Work;