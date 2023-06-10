import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logoCompany from "../../../../public/logoCompany.png";
import PhoneIcon from "../../../../public/Icons/phoneIcon.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Blog", href: "#" },
];

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      {" "}
      <header className="mx-auto max-w-screen-2xl">
        {/* First Header with PhoneNumber/CompanyLogo/Socials*/}
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <div className="flex">
              <Image
                src={PhoneIcon}
                className="h-6 w-6 text-black mr-2  "
                aria-hidden="true"
                alt=""
              />
              <p className="text-black font-  bold">+022 319 821 967</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Image width={166.58} height={32.63} src={logoCompany} alt="" />
          </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end hidden   ">
            <div className="w-[40px] h-[40px] rounded-full border-2 border-black flex justify-center items-center text-black mr-3">
              <p>Fb</p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-black flex justify-center items-center text-black mr-3">
              <p>Tw</p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-black flex justify-center items-center text-black mr-3">
              <p>Ig</p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-black flex justify-center items-center text-black ">
              <p>Yt</p>
            </div>
          </div>
        </nav>
        {/* -------------------------------------------------------- */}
        {/* Second Header With navigation/Favorite/Cart/Avatar */}
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className=" hidden lg:flex  lg:flex-1 lg:justify-end ">
            <HeartIcon
              className=" h-[24.97px] w-[27.31px] text-black mr-10"
              aria-hidden="true"
            />
            <div className=" flex justify-center items-center">
              <div className="relative ">
                <div className="t-0 absolute left-3 bottom-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#F3692E] p-3 text-xs text-white">
                    3
                  </p>
                </div>
                <ShoppingCartIcon
                  className=" h-[25.33px] w-[24.43px] text-black mr-10"
                  aria-hidden="true"
                />
              </div>
            </div>

            <UserIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="">
                  <div className="flex lg:flex-1 lg:justify-end ">
                    <HeartIcon
                      className=" h-[24.97px] w-[27.31px] text-black mr-10"
                      aria-hidden="true"
                    />
                    <div className=" flex justify-center items-center">
                      <div className="relative ">
                        <div className="t-0 absolute left-3 bottom-3">
                          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#F3692E] p-3 text-xs text-white">
                            3
                          </p>
                        </div>
                        <ShoppingCartIcon
                          className=" h-[25.33px] w-[24.43px] text-black mr-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <UserIcon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default MainHeader;
