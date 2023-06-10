"use client";
import React, { useState } from "react";
import MainHeader from "../Components/Landing/MainHeader";
import Footer from "../Components/Landing/Footer";
import CartHero from "../Components/Cart/CartHero";
import Cartitems from "../Components/Cart/Cartitems";
import CheckoutForm from "../Components/Cart/CheckoutForm";
import RelatedItems from "../Components/Blouse/RelatedItems";

const page = () => {
  return (
    <div className="bg-white">
      <MainHeader />
      <CartHero />
      <Cartitems />
      <CheckoutForm />
      <RelatedItems />
      <Footer />
    </div>
  );
};

export default page;
