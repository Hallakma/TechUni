import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
const pages = [{ name: "Shopping Bag", href: "/cart", current: false }];
const ShopHero = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="relative isolate pt-2">
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <nav className="flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <a
                        href="/"
                        className="text-gray-400 hover:text-gray-500 text-[34px]"
                      >
                        <span className="">Home</span>
                      </a>
                    </div>
                  </li>
                  {pages.map((page) => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <a
                          href={page.href}
                          className="ml-4 text-[34px] font-medium text-gray-500 hover:text-gray-700"
                          aria-current={page.current ? "page" : undefined}
                        >
                          {page.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Shopping Bag
            </h1>
          </div>
          <div className="max-md:hidden mt-2 sm:mt-24 lg:mt-0 lg:flex-shrink-0 h-[400px] w-[1024px] bg-black">
            <img
              className="bg-black h-[400px] w-[1024px] object-cover "
              alt=""
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
