import React, { useState, useEffect } from "react";
import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";

const Tab = ({ label, active, onClick, badge }) => {
  return (
    <div
      className={`cursor-pointer inline-block px-4 py-2 font-medium ${
        active ? "text-[#F86338] border-b-2 border-[#F86338]" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {label}
      {badge && (
        <span className="ml-1 px-2 py-1 text-sm bg-red-500 text-white rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const tabs = [
    { label: "All", badge: 0 },
    { label: "Dresses", badge: 3 },
    { label: "Shirts and Tops", badge: 9 },
    { label: "Sweaters & Cardigans", badge: 0 },
    { label: "Outwears", badge: 0 },
    { label: "Bags", badge: 5 },
    { label: "Shoes", badge: 0 },
    { label: "Accessories", badge: 0 },
    { label: "More", badge: 2 },
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // useEffect used here
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>No profile data</p>;
  return (
    <div className="mx-auto max-w-screen-2xl  ">
      <div className="w-full flex justify-end pr-4"></div>

      <div className="flex space-x-4 mx-auto max-w-screen-2xl justify-between">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="flex space-x-4 mx-auto max-w-screen-2xl justify-between mt-12">
        <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0">
          {products.map((item, index) => (
            <div key={index} className="p-4 bg-white mr-2 relative">
              <button className="absolute top-[30px] right-[40px] bg-transparent border-none focus:outline-none">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <HeartIcon
                    className={`h-6 w-6 text-[#F86338] ${
                      item.favorite ? "fill-current" : "stroke-current"
                    }`}
                  />
                </div>
              </button>
              <Image
                height={100}
                width={100}
                src={item.image}
                alt=""
                className="h-[296px]  w-full  object-cover bg-[#E2E2EA]"
              />
              <div className="text-center">
                <h2 className="text-[14px] mt-2 text-[#F3692E]">
                  {item.title}
                </h2>
                <p className="text-[20px] mt-2 font-bold text-[#11142D] truncate">
                  {item.description}
                </p>
                <p className="mt-2 text-[12px] text-[#515151]">
                  {item.category}
                </p>
                <p className="mt-2 text-[24px] text-[#F3692E]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
