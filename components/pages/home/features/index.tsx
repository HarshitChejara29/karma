import React from "react";
import Image from "next/image";
import { featuresData } from '../../../../data/features';

const Features = () => {
    return (
        <section className="text-white body-font bg-gradient-to-r from-[#36363D] to-[#2B393C]">
            <div className="container px-5 lg:py-24 py-14 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    {featuresData.Features.map((features, index) => (
                        <div
                        key={index}
                        className={`p-4 flex flex-col items-center justify-center
                            ${index < 6 ? 'sm:w-1/5 w-1/3' : 'hidden sm:flex sm:w-1/5 w-1/3'}`}
                        >
                        {features.image &&
                            features.image.map((image, imgIndex) => (
                            <Image
                                key={imgIndex} src={image}
                                alt="payment"
                                className="justify-center object-center lg:w-10 lg:h-10 w-8 h-8"
                                width="500" height="500"
                            />
                            ))}
                        <p className="leading-relaxed text-center">{features.imagename}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;