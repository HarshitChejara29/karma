import React from 'react';
import Image from "next/image";

const InquiryForm = () => {
    return (
        <div className="bg-[#222938] rounded-lg lg:p-16 p-5 flex flex-col md:ml-auto py-16 w-full relative z-10 shadow-md" >
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
    );
};

export default InquiryForm;