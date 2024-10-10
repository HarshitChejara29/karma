"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { expectationsData } from '../../../../data/expectations';

const Expectations = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="text-white body-font overflow-hidden bg-[#292D34]" id="blog">
            <div className="container lg:px-28 px-12 lg:py-5 lg:mb-10 py-6 mx-auto">
                <div className="flex flex-wrap -m-12">
                    <div className="p-12 md:w-1/2 flex flex-col items-start lg:text-left md:text-left text-center">
                        {expectationsData.Content.map((content, index) => (
                        <div key={index}>
                            <h2 className="lg:text-5xl text-3xl title-font font-medium text-white lg:mt-10 mt-4 mb-8 lg:px-0 md:px-0 px-5" data-aos="slide-up">{content.title}</h2>
                            <p className="leading-relaxed mb-8" data-aos="slide-up">{content.description}</p>
                            <a className="inline-flex items-center w-full lg:mb-0 mb-8" data-aos="slide-up">
                                <Image
                                    alt="blog" src="/google.svg"
                                    width="100" height="100"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white flex items-center">
                                    <span className="font-bold">{content.rating}</span>
                                        <span className="flex ml-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Image
                                                    key={i} alt="star"
                                                    src="/star.svg"
                                                    width="50" height="50"
                                                    className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                                                />
                                            ))}
                                        </span>
                                    </span>
                                    <span className="text-white text-lg font-semibold mt-0.5 text-left">{content.platform}</span>
                                </span>
                            </a>
                        </div>
                        ))}
                    </div>

                    <div className="lg:p-16 md:p-10 md:w-1/2 flex flex-col items-center content-center hidden md:block">
                        {expectationsData.Expectations.map((expectation, index) => (
                            <div key={index}>
                                <div className="inline-flex items-start mt-10" data-aos="slide-up">
                                    {expectation.image && expectation.image.map((image, imgIndex) => (
                                        <Image key={imgIndex} src={image} alt="blog" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center self-start"></Image>
                                    ))}
                                    <span className="flex-grow flex flex-col pl-4 self-start">
                                        <span className="title-font font-medium text-2xl text-white">{expectation.title}</span>
                                        <span className="text-white mt-0.5">{expectation.description}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expectations;