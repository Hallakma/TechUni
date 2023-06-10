"use client";
import React, { useState } from "react";
import MainHeader from "../Components/Landing/MainHeader";
import Footer from "../Components/Landing/Footer";
import BlouseHero from "../Components/Blouse/BlouseHero";
import ItemDescription from "../Components/Blouse/ItemDescription";
import RelatedItems from "../Components/Blouse/RelatedItems";

import Testimonials from "../Components/Landing/Testimonials";

export default function Blouse() {
  return (
    <div className="bg-white w-full ">
      <MainHeader />

      <BlouseHero />
      <ItemDescription />
      <Testimonials />
      <RelatedItems />
      <Footer />
    </div>
  );
}
