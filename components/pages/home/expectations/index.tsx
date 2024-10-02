"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Expectations = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <section className="text-white body-font overflow-hidden bg-[#292D34]">
        <div className="container lg:px-28 px-12 lg:py-24 py-6 mx-auto">
            <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start lg:text-left md:text-left text-center">
                <h2 className="lg:text-5xl text-3xl title-font font-medium text-white mt-4 mb-8 lg:px-0 md:px-0 px-5" data-aos="slide-up">What You wanna expect from us</h2>
                <p className="leading-relaxed mb-8" data-aos="slide-up">Experience the future of convenience with 100 Karma. Our super app offers a comprehensive suite of essential services, from transportation and food delivery to financial management and shopping. Elevate your lifestyle with entertainment, health, travel, and social features tailored to your preferences. Discover a world of personalized experiences as AI recommends services and products just for you.</p>
                <a className="inline-flex items-center w-full lg:mb-0 mb-8" data-aos="slide-up">
                    <Image 
                        alt="blog" 
                        src="/google.svg" 
                        width="100" 
                        height="100" 
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white flex items-center">
                        <span className="font-bold">4.9</span> / 5 rating
                        <span className="flex ml-2">
                            <Image 
                            alt="star" 
                            src="/star.svg" 
                            width="50" 
                            height="50" 
                            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <Image 
                            alt="star" 
                            src="/star.svg" 
                            width="50" 
                            height="50" 
                            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <Image 
                            alt="star" 
                            src="/star.svg" 
                            width="50" 
                            height="50" 
                            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <Image 
                            alt="star" 
                            src="/star.svg" 
                            width="50" 
                            height="50" 
                            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <Image 
                            alt="star" 
                            src="/star.svg" 
                            width="50" 
                            height="50" 
                            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                            />
                        </span>
                        </span>
                        <span className="text-white text-lg font-semibold mt-0.5 text-left">On Google Playstore</span>
                    </span>
                </a>

            </div>
            <div className="lg:p-16 md:p-10 md:w-1/2 flex flex-col items-center content-center hidden md:block">
                <a className="inline-flex items-start" data-aos="slide-up">
                    <Image alt="blog" src="/activity 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center self-start"></Image>
                    <span className="flex-grow flex flex-col pl-4 self-start">
                        <span className="title-font font-medium text-2xl text-white">Essential services</span>
                        <span className="text-white mt-0.5">From transportation and food to payments and shopping, your daily needs are covered.</span>
                    </span>
                </a>

                <a className="inline-flex items-start mt-10" data-aos="slide-up">
                    <Image alt="blog" src="/pie-chart 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center self-start"></Image>
                    <span className="flex-grow flex flex-col pl-4 self-start">
                        <span className="title-font font-medium text-2xl text-white">Lifestyle enhancements</span>
                        <span className="text-white mt-0.5">Enjoy entertainment, health, travel, and social connections, all in one place.</span>
                    </span>
                </a>

                <a className="inline-flex items-start mt-10" data-aos="slide-up">
                    <Image alt="blog" src="/command 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center self-start"></Image>
                    <span className="flex-grow flex flex-col pl-4 self-start">
                        <span className="title-font font-medium text-2xl text-white">Personalized experiences</span>
                        <span className="text-white mt-0.5">Benefit from recommendations and tailored services.</span>
                    </span>
                </a>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Expectations;