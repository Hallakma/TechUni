"use client";
import React, { useState } from "react";
import MainHeader from "../Components/Landing/MainHeader";
import Footer from "../Components/Landing/Footer";
import ShopHero from "../Components/Shop/ShopHero";
import ShopItems from "../Components/Shop/ShopItems";
import SaleBanner from "../Components/Landing/SaleBanner";
import Recommended from "../Components/Shop/Recommended";
import FilterPage from "../Components/Shop/FilterPage";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
export default function About() {
  const [filter, setFilter] = useState(false);

  const FilterClicked = () => {
    if (filter === false) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  return (
    <div className="bg-white w-full ">
      <MainHeader />

      <ShopHero />
      <div className="flex space-x-4 mx-auto max-w-screen-2xl justify-end mb-10">
        <button
          className={`flex items-center justify-center px-4 py-2 space-x-2 font-medium text-gray-500 transition-colors duration-300"
          }`}
          onClick={() => FilterClicked()}
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
          <span>Filter</span>
        </button>
      </div>
      {!filter ? (
        <div>
          {" "}
          <ShopItems
            FilterClicked={() => FilterClicked()}
          /> <SaleBanner />{" "}
        </div>
      ) : (
        <FilterPage />
      )}
      <Recommended />
      <Footer />
    </div>
  );
}
