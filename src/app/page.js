"use client";
import { useState } from "react";
import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

import CarouselItem from "./Components/CarouselItem";
import MainHeader from "./Components/Landing/MainHeader";
import HeroSection from "./Components/Landing/HeroSection";
import ProductGrid from "./Components/Landing/ProductGrid";
import SaleBanner from "./Components/Landing/SaleBanner";
import BestSellers from "./Components/Landing/BestSellers";
import Testimonials from "./Components/Landing/Testimonials";
import Footer from "./Components/Landing/Footer";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Blog", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <MainHeader />
      <HeroSection />
      <ProductGrid /> <CarouselItem />
      <SaleBanner />
      <BestSellers />
      <Testimonials />
      <Footer />
    </div>
  );
}
