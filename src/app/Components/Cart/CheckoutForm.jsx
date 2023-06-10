import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const CheckoutForm = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-[48px] font-medium text-[#11142D] mt-24">Checkout</h2>{" "}
      <h2 className="text-[31px] font-medium text-[#11142D] mt-16 max-md:text-lg">
        Customer Email
      </h2>{" "}
      <div className="mt-16">
        <label
          htmlFor="email"
          className="block text-[24px] font-medium text-[#11142D] max-md:text-lg"
        >
          Email Address
        </label>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border h-[80px] max-md:h-auto text-black border-solid text-[24px] border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
          />
        </div>
        <h2 className="text-[24px] font-medium text-[#9A9AB0] mt-6 max-md:text-lg">
          Already have an account? Sign in
        </h2>{" "}
      </div>
      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-[#11142D] text-[31px] font-medium max-md:text-lg ">
          Shipping Address
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-[24px] font-medium text-[#11142D] max-md:text-lg"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder="First name"
                className="w-full border h-[79px] max-md:h-auto border-solid border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-[24px] font-medium text-[#11142D] max-md:text-lg"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder="Last name"
                className="w-full border h-[79px] max-md:h-auto  border-solid border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-[24px] font-medium text-[#11142D] max-md:text-lg"
            >
              Address
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                placeholder="Address line"
                className="w-full border  border-solid border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="country"
              className="block text-[24px] font-medium text-[#11142D] max-md:text-lg"
            >
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                placeholder="Choose a country"
                className="w-full border h-[79px] max-md:h-auto  border-solid text-black border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              >
                <option>Australia </option>
                <option>New Zealand</option>
                <option>Canada</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="postal-code"
              className="block text-[24px] font-medium text-[#11142D]"
            >
              Postal code
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                placeholder="Choose a country"
                className="w-full border h-[79px] max-md:h-auto  border-solid text-black border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              >
                <option>0041 </option>
                <option>1140</option>
                <option>5729</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[24px] font-medium text-[#11142D]"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone number"
                autoComplete="tel"
                className="w-full border h-[79px]  max-md:h-auto border-solid text-black border-[#F86338] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-#F86338 focus:border-#F86338"
              />
            </div>
          </div>
        </div>
        <h2 className="text-[31px] font-medium text-[#11142D] mt-16">
          Billing Address
        </h2>{" "}
        <div className="flex">
          <h2 className="text-[24px] font-medium text-[#F86338] mt-16 flex ">
            <CheckCircleIcon className="h-10 w-10 text-[#F86338] mr-8" />{" "}
            <span>Same as shipping address</span>
          </h2>{" "}
        </div>
        <button className="w-full bg-[#F86338]  h-[56px] rounded-lg mt-12 text-center text-[16px]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
