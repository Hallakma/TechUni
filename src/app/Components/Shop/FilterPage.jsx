import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FunnelIcon,
  ListBulletIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "electronics", label: "electronics", checked: false },
      { value: "jewelery", label: "jewelery", checked: false },
      {
        value: "men's clothing",
        label: "men's clothing",
        checked: true,
      },
      { value: "women's clothing", label: "women's clothing", checked: false },
    ],
  },
];
const Colors = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "green-500", checked: false },
      { value: "red-500", checked: false },
      { value: "blue-500", checked: false },
      { value: "blue-500", checked: false },
      { value: "blue-500", checked: false },
      { value: "blue-500", checked: false },
      { value: "blue-500", checked: false },
      { value: "blue-500", checked: false },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //Search useEffect
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  // ---------------------------
  const SortDesc = () => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  // --------------------
  const SortAsc = () => {
    fetch("https://fakestoreapi.com/products?sort=asc")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  // --------------------
  const fetchProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>No profile data</p>;

  const sortOptions = [
    {
      id: 0,
      name: "Price: Low to High",
      current: false,
      function: () => SortAsc(),
    },
    {
      id: 1,
      name: "Price: High to Low",
      current: false,
      function: () => SortDesc(),
    },
  ];
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {Colors.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className=" border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <p className="text-[16px] px-2 text-[#11142D]">
                                    {section.name}
                                  </p>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  <div class="flex ">
                                    <div class="grid grid-cols-4 gap-4">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div key={optionIdx}>
                                            {!option.label ? (
                                              <div
                                                class={`w-10 h-10 rounded-full bg-${option.value} cursor-pointer"`}
                                              ></div>
                                            ) : null}
                                            {option.label ? (
                                              <div className="">
                                                <label
                                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                                  className="ml-3 text-sm text-gray-600"
                                                >
                                                  {option.label}
                                                </label>
                                              </div>
                                            ) : null}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      onClick={() =>
                                        handleCategoryClick(option.label)
                                      }
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-[#11142D] text-[24px]">Price</p>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#F86338"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    class="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                    id="customRange1"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-[#11142D]">Range</p>
                  <p className="text-[#11142D]">$5-$20</p>
                </div>
                {Colors.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <p className="text-[24px] text-[#11142D]">
                              {section.name}
                            </p>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            <div class="flex ">
                              <div class="grid grid-cols-4 gap-4">
                                {section.options.map((option, optionIdx) => (
                                  <div key={optionIdx}>
                                    {!option.label ? (
                                      <div
                                        class={`w-10 h-10 rounded-full bg-${option.value} cursor-pointer"`}
                                      ></div>
                                    ) : null}
                                    {option.label ? (
                                      <div className="">
                                        <label
                                          htmlFor={`filter-${section.id}-${optionIdx}`}
                                          className="ml-3 text-sm text-gray-600"
                                        >
                                          {option.label}
                                        </label>
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <p className="text-[24px] text-[#11142D]">
                              {section.name}
                            </p>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            <div class=" w-full">
                              <div class="">
                                {section.options.map((option, optionIdx) => (
                                  <div key={optionIdx} className="w-full">
                                    {option.label ? (
                                      <div className="pb-4">
                                        <label
                                          onClick={() =>
                                            handleCategoryClick(option.label)
                                          }
                                          htmlFor={`filter-${section.id}-${optionIdx}`}
                                          className="ml-3 text-[16px] text-[#11142D] flex justify-between w-full cursor-pointer"
                                        >
                                          {option.label}
                                          <ChevronRightIcon className="w-5 h-5 text-[#11142D]"></ChevronRightIcon>
                                        </label>
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="text-center">
                  <p className="text-[#F3692E] text-[16px]">Load More</p>
                  <div className="w-full h-[423px] bg-[#F3692E] mt-12 relative">
                    <div className="absolute bottom-[120px] left-[30px]">
                      {" "}
                      <h4 className="text-[39px] text-left">March Discount</h4>
                      <h5 className="text-[24px] text-left">
                        Up to 70% Off for All Items in March
                      </h5>
                      <div className="mt-10 flex items-center gap-x-6 ">
                        {" "}
                        <p className="w-[120px] h-[56px] text-[16px] items-center justify-center rounded-md bg-[#fff] text-[#7A6005] px-3.5 py-2.5 flex text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Got it
                          <span>
                            <ChevronRightIcon className="h-6 w-6" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {" "}
                <div className="relative flex flex-1">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-gray-400 mr-2"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block border-[#F86338] border-2 w-full  h-12 py-0 pl-4 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md"
                    placeholder="Search products"
                    type="search"
                    name="search"
                    onChange={handleSearch}
                  />
                </div>
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
                  <p className="text-[#9A9AB0] ">
                    Showing 1 - {products.length} Results
                  </p>
                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-right">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort By {}
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    onClick={option.function}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {option.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400  sm:ml-7 flex"
                    >
                      <span className="sr-only">View grid</span>
                      <ListBulletIcon
                        className="h-7 w-7 mr-2 hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <Squares2X2Icon
                        className="h-7 w-7 hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="flex space-x-4 mx-auto max-w-screen-2xl justify-between mt-12">
                  <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
                    {searchResults.length > 0
                      ? searchResults.map((item, index) => (
                          <div
                            key={index}
                            className="p-4 bg-white mr-2 relative"
                          >
                            <Link href="/blouse">
                              <button className="absolute top-[30px] right-[40px] bg-transparent border-none focus:outline-none">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                  <HeartIcon
                                    className={`h-6 w-6 text-[#F86338] ${
                                      item.favorite
                                        ? "fill-current"
                                        : "stroke-current"
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
                                <p className="mt-2 text-[24px] text-[#F3692E]">
                                  ${item.price}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))
                      : products.map((item, index) => (
                          <div
                            key={index}
                            className="p-4 bg-white mr-2 relative"
                          >
                            <Link href="/blouse">
                              <button className="absolute top-[30px] right-[40px] bg-transparent border-none focus:outline-none">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                  <HeartIcon
                                    className={`h-6 w-6 text-[#F86338] ${
                                      item.favorite
                                        ? "fill-current"
                                        : "stroke-current"
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
                                <p className="mt-2 text-[24px] text-[#F3692E]">
                                  ${item.price}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>
                <div class="flex flex-col items-center my-12">
                  <div class="flex text-gray-700">
                    <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-white cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#E0E0E0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-left w-6 h-6"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </div>
                    <div class="flex h-12 font-medium rounded-full ">
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  bg-[#F86338] text-white">
                        1
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        2
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        3
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        4
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        5
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        ...
                      </div>
                      <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                        10
                      </div>
                    </div>
                    <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full  cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#F86338"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-right w-6 h-6"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <ChevronDoubleRightIcon className="h-7 w-7 text-[#F86338]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
