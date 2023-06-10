import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

const BagItems = [
  {
    name: "Classic Blouse IX",
    price: "$99",
    department: "Optimization",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Classic Blouse IX",
    price: "$99",
    department: "Optimization",

    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Classic Blouse IX",
    price: "$99",
    department: "Optimization",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h3 className="text-[#11142D] text-[48px]">Cart</h3>
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead className="bg-[#F86338]  rounded-md ">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5  pr-3 ml-12 text-left text-[24px] font-semibold text-white sm:pl-0"
                  ></th>
                  <th
                    scope="col"
                    className="py-3.5  pr-3 ml-12 text-left text-[24px] font-semibold text-white sm:pl-0"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-[24px]  font-semibold text-white"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-[24px]  font-semibold text-white"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-[24px] font-semibold text-white"
                  >
                    Total
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {BagItems.map((item, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-[88px] w-[88px] flex-shrink-0">
                          <img
                            className="h-[88px] w-[88px] rounded-md"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5  text-[24px] text-[#11142D]">
                      <div className="ml-4">
                        <div className="font-medium text-[24px] text-[#11142D]">
                          {item.name}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5  text-[24px] text-[#11142D]">
                      <div className="text-gray-900">{item.price}</div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-5  text-[24px] text-[#11142D]">
                      <div className="text-gray-900">2</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5  text-[24px] text-[#11142D]">
                      {item.role}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right  text-[24px] font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <TrashIcon className="h-6 w-6 text-[#001646]" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Coupon and Total amount */}
      <div className="flex justify-between mt-16 max-md:block">
        <div className="w-1/2 bg-[#FFEFEB] mr-24 relative h-[353px] max-md:w-full">
          <div className="absolute bottom-[100px] left-[75px] ">
            <h2 className="text-[#11142D] text-[24px] font-bold">
              Have a Coupon?
            </h2>
            <input
              type="email"
              placeholder="Input your email here"
              className="border border-[#F86338] bg-[#FFEFEB] rounded-md w-[500px] h-[56px] pl-2 mt-4 max-md:w-auto"
            ></input>
            <br></br>
            <button className="bg-[#F86338] px-4 py-4 rounded-md mt-4">
              Apply Coupon
            </button>
          </div>
        </div>

        <div className="w-1/3 max-md:w-full">
          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <h2
                id="summary-heading"
                className="text-[24px] font-medium text-[#11142D]"
              >
                Cart Totals
              </h2>

              <dl className=" space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-[#11142D] text-[16px]">Subtotal</dt>
                  <dd>$150</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-[#11142D] text-[16px]">Shipping</dt>
                  <dd>Free Shipping</dd>
                </div>
                <div className="flex items-center justify-end">
                  <dt className="text-[#11142D] text-[16px]"></dt>
                  <dd>Shipping to Sidney</dd>
                  <dd className="text-[#F3692E] pl-12 ">Change</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-[#11142D] text-[16px]">Total</dt>
                  <dd>$350</dd>
                </div>
                <button className="w-full bg-[#F86338]  h-[56px] rounded-lg mt-12 text-center text-[16px] text-white">
                  Checkout
                </button>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
