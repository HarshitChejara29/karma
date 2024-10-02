import React from "react";
import Image from "next/image";

const Services = () => {
    return (
        <section className="text-[#A6A6A6] body-font bg-[#181C23]">
        <div className="container lg:px-28 px-12 py-1 mx-auto">
            <div className="lg:w-full flex flex-col lg:mt-20 mt-10 sm:flex-row lg:items-start items-center mx-auto lg:gap-28 gap-8">
            <h1 className="lg:text-5xl text-3xl font-medium title-font text-white lg:hidden">Our Services</h1>
            <h1 className="lg:text-5xl text-3xl font-medium title-font text-white hidden md:block">Our <br/>Services</h1>
            <p className="lg:w-1/2 lg:pr-16 lg:text-left text-center">Enjoy a world of convenience with [Super App Name]. From essentials like rides, food, and finance to lifestyle perks like shopping, entertainment, and travel, we have got you covered. Experience personalized recommendations and AI-powered features for a smarter, simpler life.</p>
            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                <button type="button" className="lg:ml-16 text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
            </a>
            </div>
        </div>
        <div className="container px-5 lg:py-24 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/house.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Property</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/shopping-bag.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Laundry</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/bike-city.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Transport</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex-col items-center justify-center">
                    <Image src="/ruler-pencil.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Local Mistry</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/truck-delivery.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Courier</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/drink-tea.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Restaurant</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/house-modern.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Hotel And Lodging</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/shopping-cart.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Grocery</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/person-girl.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Salon</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/heart.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center mt-2">Marriage hall</p>
                </div>
            </div>
            <div className="flex justify-center items-center lg:hidden mt-5">
                <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                <button className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-gradient-to-t from-[#1E2B34] to-[#1A2029]">
                    Know More
                </button>
                </a>
            </div>
        </div>
        </section>
    );
};

export default Services;