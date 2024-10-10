"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import InquiryForm from "@/components/forms/inquiry";
import { workData } from '../../../../data/work';

const Work = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


    return (
    <section className="text-white body-font overflow-hidden bg-[#0C0F18]" id="work">
        <div className="container lg:px-28 px-8 lg:py-24 mt-10 mx-auto">
            <div className="flex flex-wrap -m-12">
                <div className="p-12 md:w-1/2 flex flex-col items-center lg:text-left text-center">
                {workData.Work.map((work, index) => (
                    <div key={index} className="lg:mr-20">
                        <h2 className="lg:text-5xl text-3xl title-font font-medium text-white lg:mb-8 mb-5" data-aos="slide-up">{work.title}</h2>
                        <p className="leading-relaxed lg:mb-8 mb-5 text-gray-400" data-aos="slide-up">{work.description}</p>
                        <p className="leading-relaxed lg:mb-8 mb-5 text-xl font-bold" data-aos="slide-up">{work.subtitle}</p>
                        <p className="leading-relaxed mb-8 text-gray-400" data-aos="slide-up">{work.author}</p>
                        <div className="inline-flex items-center hidden md:block" data-aos="slide-up">
                        <span className="flex lg:gap-5 md:gap-2">
                            {workData.Users.map((users, index) => (
                            <span key={index} className="flex lg:gap-5 md:gap-2">
                                {users.image && users.image.map((image, imgIndex) => (
                                <Image key={imgIndex} src={image} alt="user1" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                                ))}
                            </span>
                            ))}
                            <Image alt="playbutton" src="/playbutton.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        </span>
                        </div>
                    </div>
                    ))}
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