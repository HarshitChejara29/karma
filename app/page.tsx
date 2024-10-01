"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {




    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      "/images/mobile_mockup.png",
      "/images/mobile_mockup.png",
      "/images/mobile_mockup.png",
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
  





  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);




    return(
        <React.Fragment>
        {/* bg-gradient-to-r from-[#20282F] via-[#2b2f35] to-[#20282F] */}
        <section className="text-white body-font bg-[#20282F]">
        <div className="container px-72 mx-auto text-center">
            <div className="flex flex-col text-center w-full mb-12">
                {/* <Image src="/images/logo.png" alt="logo" width={200} height={200}></Image> */}
            <h1 className="sm:text-6xl tracking-tighter text-2xl font-medium title-font mt-24 mb-8 text-white">The First True Super App</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover a world of convenience at your fingertips with 100 Karma. Your ultimate digital companion for everything you need, from daily essentials to extraordinary experiences.</p>
            </div>
            <div className="item-center object-center justify-center">
            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
            </a>
            </div>
        </div>
        </section>






    <section className="text-gray-600 body-font py-5 bg-gradient-to-t from-[#171B23] to-[#20282F]  flex justify-center items-center">
      <div className="container flex justify-center items-center py-28">
        <div className="w-4/5 h-[650px] bg-[#343a41] flex rounded-3xl">
        <div className="flex flex-col gap-48 ml-10">
            <Image src="/images/notification.png" alt="notify" className="w-[600px] h-[130px] animate-bounce" width={200} height={200} />
            <Image src="/images/chat-icon.png" alt="chat" className="w-[50px] h-[50px] animate-bounce z-10" width={200} height={200} />
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
                    src={src}
                    alt={`carousel-${index}`}
                    className="w-[450px] object-contain"
                    width={500}
                    height={500}
                    />
                </div>
                ))}
            </div>
          </div>
          <div className="flex gap-36 mr-40">
            <Image src="/images/right-icon.png" alt="right" className="w-[50px] h-[50px] animate-bounce" width={200} height={200} />
            <Image src="/images/db-icon.png" alt="db" className="w-[50px] h-[50px] animate-bounce z-10 mt-36" width={200} height={200} />
          </div>
          </div>
          </div>
    </section>







        <section className="text-white body-font overflow-hidden bg-[#292D34]">
        <div className="container px-28 py-24 mx-auto">
            <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
                <h2 className="sm:text-5xl text-2xl title-font font-medium text-white mt-4 mb-4" data-aos="slide-up">What You wanna expect from us</h2>
                <p className="leading-relaxed mb-8" data-aos="slide-up">Experience the future of convenience with 100 Karma. Our super app offers a comprehensive suite of essential services, from transportation and food delivery to financial management and shopping. Elevate your lifestyle with entertainment, health, travel, and social features tailored to your preferences. Discover a world of personalized experiences as AI recommends services and products just for you.</p>
                <a className="inline-flex items-center w-full" data-aos="slide-up">
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
                        <span className="text-white text-lg font-semibold mt-0.5">On Google Playstore</span>
                    </span>
                </a>

            </div>
            <div className="p-16 md:w-1/2 flex flex-col items-start">
                <a className="inline-flex items-center" data-aos="slide-up">
                <Image alt="blog" src="/activity 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center"></Image>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-2xl text-white">Essential services</span>
                    <span className="text-white mt-0.5">From transportation and food to payments and shopping, your daily needs are covered.</span>
                </span>
                </a>

                <a className="inline-flex items-center mt-10" data-aos="slide-up">
                <Image alt="blog" src="/pie-chart 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center"></Image>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-2xl text-white">Lifestyle enhancements</span>
                    <span className="text-white mt-0.5">Enjoy entertainment, health, travel, and social connections, all in one place.</span>
                </span>
                </a>

                <a className="inline-flex items-center mt-10" data-aos="slide-up">
                <Image alt="blog" src="/command 1.svg" width="100" height="100" className="px-3 py-3 w-16 h-16 bg-white border flex-shrink-0 object-cover object-center"></Image>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-2xl text-white">Personalized experiences</span>
                    <span className="text-white mt-0.5">Benefit from recommendations and tailored services.</span>
                </span>
                </a>
            </div>
            </div>
        </div>
        </section>






        <section className="text-[#A6A6A6] body-font bg-[#181C23]">
        <div className="container px-28 py-20 mx-auto">
            <div className="lg:w-full flex flex-col sm:flex-row sm:items-center items-start mx-auto gap-28">
            <h1 className="sm:pr-16 text-5xl font-medium title-font text-white">Our <br/>Services</h1>
            <p className="w-1/2 sm:pr-16 ">Enjoy a world of convenience with [Super App Name]. From essentials like rides, food, and finance to lifestyle perks like shopping, entertainment, and travel, we have got you covered. Experience personalized recommendations and AI-powered features for a smarter, simpler life.</p>
            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
            </a>
            </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/house.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Property</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/shopping-bag.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Laundry</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/bike-city.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Transport</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/ruler-pencil.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Local Mistry</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/truck-delivery.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Courier</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/drink-tea.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Restaurant</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/house-modern.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Hotel And Lodging</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/shopping-cart.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Grocery</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/person-girl.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Salon</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/heart.svg" alt="payment" className="bg-[#2E2F36] justify-center object-center rounded-2xl px-4 py-4 w-24 h-24" width="500" height="500"></Image>
                <p className="leading-relaxed text-center mt-2">Marriage hall</p>
            </div>
            </div>
        </div>
        </section>






        <section className="text-white body-font bg-[#34383E]">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/Mobile.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Mobile</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/Electricity.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Electricity</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/DTH.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">DTH</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/Flight.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Flight</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/Broadband.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Broadband</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/FASTag.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">FASTag</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/2 flex flex-col items-center justify-center">
                <Image src="/Education.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Education Fees</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/PayLoan.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Pay Loan</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/Cylinder.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Book a Cylinder</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                <Image src="/LIC.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                <p className="leading-relaxed text-center">Insurance / LIC</p>
            </div>
            </div>
        </div>
        </section>






        <section className="text-white body-font overflow-hidden bg-[#0C0F18]">
        <div className="container px-28 py-24 mt-16 mx-auto">
            <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
                <div className="mr-20">
                <h2 className="sm:text-5xl text-2xl title-font font-medium text-white mt-4 mb-8" data-aos="slide-up">Work & Earn With <br/>100-KARMA</h2>
                <p className="leading-relaxed mb-8 text-gray-400" data-aos="slide-up">Earn upto Rs: 30,000/- as extra income per month. Become a 100-KARMA  Agent today & start earning on your own terms. Make it a full time, part time or flexi time earning opportunity. The 100-KARMA  Agent program is for everyone looking at earning extra money with freedom & flexibility.</p>
                <p className="leading-relaxed mb-8 text-xl font-bold" data-aos="slide-up">Become a 100-KARMA Sales & Service Agent today & lead the way to a digital revolution.</p>
                <p className="leading-relaxed mb-8 text-gray-400" data-aos="slide-up">_ Aria Zinanrio</p>
                <a className="inline-flex items-center" data-aos="slide-up">
                <span className="flex gap-5">
                    <Image alt="user1" src="/user1.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                    <Image alt="user2" src="/user2.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                    <Image alt="user3" src="/user3.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                    <Image alt="user4" src="/user4.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                    <Image alt="playbutton" src="/playbutton.svg" width="50" height="50" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"></Image>
                </span>
                </a>
                </div>
            </div>
            <div className="p-16 md:w-1/2 flex flex-col items-start">
               
            <div className="bg-[#222938] rounded-lg p-16 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" data-aos="slide-up">
            <div className="flex justify-center items-center">
                <Image 
                alt="logo" 
                src="/Logo.svg" 
                width="50" 
                height="50" 
                className="absolute -translate-y-[60%] w-36 h-36 rounded-full object-cover"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white mb-2">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                name="email" 
                className="w-full bg-white rounded-lg text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-8">
                <label htmlFor="message" className="leading-7 text-sm text-white mb-2">Message</label>
                <textarea 
                id="message" 
                name="message" 
                placeholder="What are you say?" 
                className="w-full bg-white rounded-lg h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
            </div>
            <button 
                type="button" 
                className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]"
            >
                Click To Apply
            </button>
            </div>
            </div>
            </div>
        </div>
        </section>





        </React.Fragment>
    );
}