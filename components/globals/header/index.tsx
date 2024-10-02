"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Image from "next/image";

const Header = () => {
  return (
      <Popover className={"sticky z-50 mx-auto flex items-center lg:px-32 px-10 py-2 h-24 bg-[#20282F]"}>
        <Link href="/"><Image src="/Logo.svg" alt="logo" width={50} height={50} className="hidden sm:block"></Image></Link>
        <div className="grow bg-transparent">
          <div className="hidden sm:flex items-center justify-left ml-8 gap-2 md:gap-8">
            <Link href="#" className="text-white font-light">Services</Link>
            <Link href="#" className="text-white font-light">Work With Us</Link>
            <Link href="#" className="text-white font-light">Blog</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#394045] p-2 text-white">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-[#394045] border-white border shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
                <a href="/">
                    <Image src="/Logo.svg" alt="logo" width={50} height={50} className="items-start" />
                </a>
                <h1 className="text-black font-bold"></h1>
                <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
            </div>


              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {/* <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="">Services</Link>   */}
                  <Link className="text-white focus:outline-none focus:ring-2 focus:ring-inset px-2 font-bold" href="#">Services</Link>
                  <Link className="text-white focus:outline-none focus:ring-2 focus:ring-inset px-2 font-bold" href="#">Work With Us</Link>
                  <Link className="text-white focus:outline-none focus:ring-2 focus:ring-inset px-2 font-bold" href="#">Blog</Link>
                  <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
                  </a>
                  </nav>
              </div>

            </div>
          </div>
        </Popover.Panel>
        </Transition>

        <div className="hidden  sm:block  py-7 h-24">
          <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white rounded-full border-2 border-[#224A50] hover:text-[#1f272e] hover:bg-white py-2 px-8 leading-6 bg-[#79CDC5]">Download Now</button>
          </a>
        </div>
      </Popover>
  );
};
export default Header;