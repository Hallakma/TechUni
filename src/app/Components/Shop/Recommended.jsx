import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Recommended = () => {
  const items = [
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1682364853177-b69f92750a96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      title: "Bags",
      description: "Classic Blouse IX",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1682364853177-b69f92750a96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },

    // Add more items as needed
  ];
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 ">
        <div className="mx-auto flex  pb-10 pt-28 justify-between">
          <h1 className="text-[#11142D] text-[48px] ">Recommended for you</h1>
        </div>
        <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg relative">
              <Image
                height={100}
                width={100}
                src={item.image}
                alt=""
                className="h-[296px] w-full  object-cover bg-[#E2E2EA]"
              />
              <div className="text-center">
                <p className="text-[24px] mt-2 font-bold text-[#11142D]">
                  {item.description}
                </p>

                <p className="mt-2 text-[24px] text-[#F3692E]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
