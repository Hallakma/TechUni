import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

import { Menu } from "@headlessui/react";
import {
  ShareIcon,
  ShoppingCartIcon,
  StarIcon,
  ChevronDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Flats", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Heels", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
              { name: "Accessories", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Tops", href: "#" },
              { name: "Bottoms", href: "#" },
              { name: "Swimwear", href: "#" },
              { name: "Underwear", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Hoodies", href: "#" },
              { name: "Swimsuits", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const product = {
  name: "Zip Tote Basket",

  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://m.media-amazon.com/images/I/61Skl6xNLWL._AC_SY741_.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://m.media-amazon.com/images/I/61aVXVroOxL._AC_SX569_.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://m.media-amazon.com/images/I/51Gxb8A2UTL._AC_SY741_.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://m.media-amazon.com/images/I/71qUZFmUPfL._AC_SY741_.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};
const relatedProducts = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDescription() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <main className="mx-auto max-w-screen-2xl  max-md:align-center sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden  sm:block lg:max-w-none">
                <Tab.List className="grid cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative w-32 flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase"
                    >
                      {({ selected }) => (
                        <>
                          <span className="absolute inset-1 overflow-hidden rounded-md border-white">
                            <img
                              src={image.src}
                              alt=""
                              className="h-[126px] w-[88px] object-cover object-center"
                            />
                          </span>
                          <span aria-hidden="true" />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-h-1 aspect-w-1 w-full ">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      height={300}
                      width={300}
                      src={image.src}
                      alt={image.alt}
                      className="h-[600px] w-full object-cover bg-white sm:rounded-lg "
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 ml-24 max-md:mt-2 max-md:ml-0">
              <h1 className="text-[48px] font-bold tracking-tight text-[#11142D]">
                Classic Blouse IX{" "}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-[16px] tracking-tight text-[#515151]">
                  Avaliability :{" "}
                  <span className="text-[#11142D]">48 in stocks</span>
                </p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="text-[39px] tracking-tight text-[#F3692E] pr-[-10rem]">
                  $1000
                  <span className="text-[16px] tracking-tight text-[#9A9AB0] line-through ml-12">
                    {" "}
                    $1500
                  </span>
                </p>

                <div className="flex float-right items-center">
                  {" "}
                  <p className="text-black">Share</p>
                  <ShareIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              {/* Reviews */}
              <div className="mt-3"></div>

              <div className="mt-16">
                <ul className="flex  flex-col w-[50%] ">
                  <li className="flex text-black pb-4 ">
                    <p>SKU:</p>
                    <p className="ml-[6rem]">AA0031</p>
                  </li>
                  <li className="flex text-black pb-4 ">
                    <p>Category:</p>
                    <p className="ml-[3.7rem]">Dresses</p>
                  </li>
                  <li className="flex text-black pb-4 ">
                    <p>Tags:</p>
                    <p className="ml-24">Fashion,Classic,Blouses,Dresses</p>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between mt-16">
                  <div>
                    {" "}
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Select Size
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </Menu>
                  </div>
                  <div>
                    <div class="flex items-center ">
                      <button class=" text-gray-700 px-4 py-2 rounded-l-lg focus:outline-none">
                        -
                      </button>
                      <div class=" text-gray-700 px-4 py-2">
                        <span class="text-lg font-semibold">0</span>
                      </div>
                      <button class=" text-gray-700 px-4 py-2 rounded-r-lg focus:outline-none">
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#F3692E] text-[16px]">Add note</p>
                  </div>
                </div>
              </div>
              <form className="mt-6">
                {/* Colors */}

                <div className="mt-10 flex">
                  <button
                    type="submit"
                    className="flex  max-w-[12rem] flex-1 items-center justify-around rounded-md border border-transparent bg-[#F86338] px-8 py-3 text-base font-medium text-white  sm:w-full"
                  >
                    Add to Cart
                    <ShoppingCartIcon className="h-5 w-5 text-white" />
                  </button>

                  <button
                    type="button"
                    className="ml-4  border-2 border-[#F86338] flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <StarIcon
                      className="h-6 w-6 flex-shrink-0 text-[#F86338]"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex max-md:grid max-lg:grid ">
            <div className="flex-[0.6]">
              {" "}
              <section
                aria-labelledby="related-heading"
                className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
              >
                <h2
                  id="related-heading"
                  className="text-xl font-bold text-[#11142D]"
                >
                  Description
                </h2>

                <div className="mt-8 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8 w-[80%]">
                  <p className="text-[#515151]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                    autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem
                    eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
              </section>
            </div>
            <div className="mt-10 border-t flex-[0.4] border-gray-200 px-4 py-16 sm:px-0">
              <h2
                id="related-heading"
                className="text-xl font-bold text-[#11142D] pb-6"
              >
                Fabric Details
              </h2>
              <ul className="w-full">
                <li className="flex text-black pb-4 ">
                  <CheckCircleIcon className="h-6 w-6 text-[#F86338]" />
                  <p className="ml-[1rem]">100% Cotton</p>
                </li>
                <li className="flex text-black pb-4 ">
                  <CheckCircleIcon className="h-6 w-6 text-[#F86338]" />
                  <p className="ml-[1rem]">Quick Dry</p>
                </li>
                <li className="flex text-black pb-4 ">
                  <CheckCircleIcon className="h-6 w-6 text-[#F86338]" />
                  <p className="ml-[1rem]">Ties as Shoulder</p>
                </li>
                <li className="flex text-black pb-4 ">
                  <CheckCircleIcon className="h-6 w-6 text-[#F86338]" />
                  <p className="ml-[1rem]">Accusantium doloremque </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
