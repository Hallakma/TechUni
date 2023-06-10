import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const SaleBanner = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto max-w-screen-2xl  mt-32  sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#F86338] px-6 py-24 shadow-2xl  sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-[24px] font-bold tracking-tight text-white sm:text-[24px] pb-8">
            March Discount
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-[64px] leading-8 text-white pb-8">
            Up to 70% off
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4 justify-center">
            <button
              type="submit"
              className="flex rounded-md bg-white px-3.5 py-2.5 text-[16px] font-semibold text-[#7A6005] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Got it
              <span>
                <ChevronRightIcon className="h-5 w-5 text-[#7A6005]" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
