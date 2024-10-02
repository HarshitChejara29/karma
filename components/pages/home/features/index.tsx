import React from "react";
import Image from "next/image";

const Features = () => {
    return (
        <section className="text-white body-font bg-gradient-to-r from-[#36363D] to-[#2B393C]">
            <div className="container px-5 lg:py-24 py-14 mx-auto">
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
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/Flight.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Flight</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/Broadband.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Broadband</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/FASTag.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">FASTag</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/Education.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Education Fees</p>
                </div>
                <div className="p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/PayLoan.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Pay Loan</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/Cylinder.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Book a Cylinder</p>
                </div>
                <div className="hidden sm:flex p-4 sm:w-1/5 w-1/3 flex flex-col items-center justify-center">
                    <Image src="/LIC.svg" alt="payment" className="justify-center object-center w-10 h-10" width="500" height="500"></Image>
                    <p className="leading-relaxed text-center">Insurance / LIC</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Features;