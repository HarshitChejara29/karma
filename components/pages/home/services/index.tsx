import React from "react";
import Image from "next/image";
import { servicesData } from '../../../../data/services';
import Button from "@/components/globals/button";

const Services = () => {
    return (
        <section className="text-[#A6A6A6] body-font bg-[#181C23]">
        <div className="container lg:px-28 px-12 py-1 mx-auto">
            {servicesData.Content.map((content, index) => (
            <div key={index} className="lg:w-full flex flex-col lg:mt-20 mt-10 md:flex-row md:items-start items-center mx-auto lg:gap-28 md:gap-12 gap-8">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium title-font text-white lg:max-w-[20%]">{content.title}</h1>
                <p className="lg:w-1/2 md:w-2/3 lg:text-left md:text-left text-center">{content.description}</p>
                <Button/>
            </div>
            ))}
        </div>

        <div className="container px-5 lg:py-24 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
                {servicesData.Services.map((services, index) => (
                    <div
                    key={index}
                    // Show or hide div based on the screen size
                    className={`p-4 flex flex-col items-center justify-center
                        ${index < 6 ? 'sm:w-1/5 w-1/3' : 'hidden sm:flex sm:w-1/5 w-1/3'}`}
                    >
                    {services.image &&
                        services.image.map((image, imgIndex) => (
                        <Image
                            key={imgIndex} src={image}
                            alt={services.imagename || "service"}
                            className="bg-[#2E2F36] justify-center object-center rounded-2xl p-4 lg:w-24 lg:h-24 w-16 h-16"
                            width="500" height="500"
                        />
                        ))}
                    <p className="leading-relaxed text-center mt-2">{services.imagename}</p>
                    </div>
                ))}
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