"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/globals/button";


const Hero = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "/images/Frame.png",
      "/images/Frame-1.png",
      "/images/Frame-2.png",
      "/images/Frame-3.png",
      "/images/Frame-4.png",
      "/images/Frame-5.png",
      "/images/Frame-6.png",
      "/images/Frame-7.png",
      "/images/Frame-8.png",
      "/images/Frame-9.png",
      "/images/Frame-10.png",
    ];
    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);


    return (
        <>
            <section className="text-white body-font bg-[#20282F] ">
                <div className="container lg:px-44 md:px-16 px-5 mx-auto text-center">
                    <div className="flex flex-col text-center w-full mb-5">
                        <div className="flex justify-center items-center mb-10 lg:hidden md:hidden md:block">
                            <Image
                            alt="logo" src="/Logo.svg"
                            width="50" height="50"
                            className="w-36 h-36 rounded-full object-cover"
                            />
                        </div>
                        <h1 className="lg:text-5xl text-3xl tracking-tighter font-medium title-font lg:mt-5 md:mt-10 lg:mb-5 mb-3 text-white">THE BAAP OF ALL APPs</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base lg:px-3 px-8">Discover a world of convenience at your fingertips with 100 Karma. Your ultimate digital companion for everything you need, from daily essentials to extraordinary experiences.</p>
                    </div>
                    <div className="item-center object-center justify-center">
                        <Button/>
                    </div>
                </div>
            </section>



            <section className="text-gray-600 body-font bg-gradient-to-t from-[#171B23] to-[#20282F] flex justify-center items-center">
                <div className="container flex justify-center items-center py-10 lg:px-0 px-5">
                    <div className="lg:w-3/4 md:w-5/6 lg:h-[500px] md:h-[400px] h-[250px] bg-[#343a41] flex rounded-3xl">
                        <div className="flex flex-col lg:gap-48 md:gap-48 lg:ml-4 md:ml-8 gap-24 ml-5">
                            <Image src="/images/notification.png" alt="notify" className="lg:w-[900px] md:w-[450px] w-[600px] lg:h-[130px] h-[40px] animate-bounce" width={200} height={200} />
                            <Image src="/Cylinder.svg" alt="chat" className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[20px] h-[20px] animate-bounce z-10" width={200} height={200} />
                        </div>
                        <div className="flex justify-center items-end relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out justify-left items-left"
                                style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }} // Slide effect
                            >
                                {images.map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 flex justify-center" // Take full width for each image
                                    style={{ width: "100%", height: "100%" }} // Ensure the width matches the parent
                                >
                                    <Image
                                    src={src} alt={`carousel-${index}`}
                                    className="lg:w-[245px] md:w-[190px] w-[120px] object-contain"
                                    width={500} height={500}
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex lg:gap-36 gap-14 lg:mr-24 md:mr-14 mr-10">
                            <Image src="/FASTag.svg" alt="right" className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[20px] h-[20px] animate-bounce" width={200} height={200} />
                            <Image src="/Electricity.svg" alt="db" className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[20px] h-[20px] animate-bounce z-10 lg:mt-36 mt-20 " width={200} height={200} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;