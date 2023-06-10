import React from "react";
import Carousel from "react-multi-carousel";
import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CarouselItem = () => {
  const [currentItem, setCurrentItem] = React.useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  const toggleFavorite = (index) => {
    // Implement your logic to toggle item favorite status here
    console.log("Toggle favorite for item at index", index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const items = [
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://plus.unsplash.com/premium_photo-1676465057157-342816cc6594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      title: "Bags",
      description: "Queen’s Summer",
      subdesc: "Medium Shoulder bag",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1682364853177-b69f92750a96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },

    // Add more items as needed
  ];
  return (
    <div className="relative w-full">
      <div className="mx-auto flex  w-[75%] pb-10 pt-28 justify-between items-center">
        <h1 className="text-[#11142D] text-[48px] max-md:text-[26px]">
          New Arrival
        </h1>
        <h1 className="text-[#F86338] text-[24px] max-md:text-[16px]">
          See ALL
        </h1>
      </div>
      <ReactMultiCarousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        arrows={true}
        showDots={false}
        centerMode={false}
        centerSlidePercentage={20}
        containerClass="carousel-container"
        itemClass="carousel-item"
        beforeChange={(previousSlide, currentSlide) =>
          setCurrentItem(currentSlide)
        }
      >
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
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
              className="h-[296px] w-full  object-cover bg-[#E2E2EA]"
            />
            <div className="text-center">
              <h2 className="text-[14px] mt-2 text-[#F3692E]">{item.title}</h2>
              <p className="text-[24px] mt-2 font-bold text-[#11142D]">
                {item.description}
              </p>
              <p className="mt-2 text-[12px] text-[#515151]">{item.subdesc}</p>
              <p className="mt-2 text-[24px] text-[#F3692E]">{item.price}</p>
            </div>
          </div>
        ))}
      </ReactMultiCarousel>
    </div>
  );
};
export default CarouselItem;
