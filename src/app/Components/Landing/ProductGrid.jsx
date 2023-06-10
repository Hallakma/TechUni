import React from "react";
import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1631234764568-996fab371596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1663013729768-8fcfe4cda447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];
const ProductGrid = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 ">
        <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
          <a className="group relative">
            <div className="aspect-h-1 aspect-w-1  overflow-hidden sm:aspect-h-3 sm:aspect-w-2 max-md:w-full h-[560px] w-[480px] bg-[#E2E2EA] ">
              <Image
                src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                height={500}
                width={500}
                alt=""
              />
              <div className="mt-4 text-base font-medium text-gray-900 absolute left-[44px] top-[300px] ">
                <h3 className="text-[48px] pb-4">Dresses</h3>

                <p className="mt-1 text-sm  text-gray-500 pb-4 w-[70%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <ArrowRightCircleIcon className="h-[40px] w-[40px] text-[#F86338]" />
              </div>

              <div className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
          </a>
          {products.map((product, index) => (
            <a className="group relative" key={index}>
              <div className="aspect-h-1 aspect-w-1  overflow-hidden sm:aspect-h-3 sm:aspect-w-2 max-md:w-full h-[560px] w-[480px] bg-[#E2E2EA] ">
                <Image src={product.img} height={500} width={500} alt="" />
                <div className="mt-4 text-base font-medium text-gray-900 absolute left-[44px] top-[300px] "></div>

                <div className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
