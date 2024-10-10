"use client";
import React, { useState } from 'react';


export default function Footer() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

    return(
        <React.Fragment>
            <footer className="text-gray-300 bg-[#0c0f18] border-t border-[#33373c] body-font">
                <div className="container lg:px-28 px-5 py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-left -mb-10 -mx-4">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:block">
                        <h2 className="title-font font-bold text-[#ffffff] text-lg mb-3"><span className="text-[#79cdc5]">Quick</span> Links</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a href="https://100karma.com/privacy-policy" target="blank" className="text-gray-300 hover:text-gray-500">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/pricing-policy" target="blank" className="text-gray-300 hover:text-gray-500">Pricing Policy</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/termandconditions" target="blank" className="text-gray-300 hover:text-gray-500">Term & Conditions</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/about-us" target="blank" className="text-gray-300 hover:text-gray-500">About us</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/support" target="blank" className="text-gray-300 hover:text-gray-500">Support</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/faq" target="blank" className="text-gray-300 hover:text-gray-500">FAQ</a>
                        </li>
                        </nav>
                    </div>



                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 lg:hidden">
                        <div className="flex mb-3">
                        <h2 className="title-font font-bold text-[#ffffff] text-lg mb-0 cursor-pointer" onClick={toggleDropdown}>
                            <span className="text-[#79cdc5]">Quick</span> Links
                        </h2>
                        <button className="ml-2 text-gray-300" onClick={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                            </svg>
                        </button>
                        </div>

                    {isOpen && (
                        <nav className="list-none mb-10">
                        <li>
                            <a href="https://100karma.com/privacy-policy" target="blank" className="text-gray-300 hover:text-gray-500">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/pricing-policy" target="blank" className="text-gray-300 hover:text-gray-500">Pricing Policy</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/termandconditions" target="blank" className="text-gray-300 hover:text-gray-500">Term & Conditions</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/about-us" target="blank" className="text-gray-300 hover:text-gray-500">About us</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/support" target="blank" className="text-gray-300 hover:text-gray-500">Support</a>
                        </li>
                        <li>
                            <a href="https://100karma.com/faq" target="blank" className="text-gray-300 hover:text-gray-500">FAQ</a>
                        </li>
                        </nav>
                    )}
                    </div>



                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#ffffff] text-lg mb-3"><span className="text-[#79cdc5]">Experience</span> 100 Karma App on Mobile</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-300">Keep in Touch</a>
                        </li>
                        <li className="mt-2">
                            <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
                                <a href="https://www.facebook.com/100KARMA/" target="blank" className="text-gray-500 text-white">
                                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://x.com/100Karma_" target="blank" className="ml-3 text-gray-500 text-white">
                                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/channel/UC9ZRZgv_mg8-siDnjQMWIvg" target="_blank" className="ml-3 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/100karma_/" target="_blank" className="ml-3 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/>
                                    </svg>
                                </a>
                            </span>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#ffffff] text-lg mb-3"><span className="text-[#79cdc5]">Contact</span> With Us</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-300 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/>
                                </svg>
                                3rd Floor, Mahendra Dev Tower, Puri - Cuttack Rd, Bomikhal, Bhubaneswar, Odisha 751006
                            </a>
                            </li>
                            <li>
                            <a href="mailto:info@100karma.com" className="text-gray-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                                </svg>
                                info@100karma.com
                            </a>
                        </li>
                        </nav>
                    </div>
                    </div>
                </div>
                <div className="bg-[#222938]">
                    <div className="container mx-auto py-4 px-5 flex items-center justify-center">
                        <p className="text-gray-300 text-sm text-center">
                        © 2021 KARTIKESWARA MATRIX & ACCESS PVT. LTD. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}