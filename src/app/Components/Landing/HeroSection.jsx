import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-white relative">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-screen-2xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8  lg:py-4">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10  text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Sort out Your Spring Look
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We will help to develop every smallest thing into a big one
                  for your company.
                </p>
                <div className="mt-10 flex items-center gap-x-6 ">
                  <Link href="/shop">
                    {" "}
                    <p className="w-[120px] h-[56px] text-[16px] items-center justify-center rounded-md bg-[#F86338] px-3.5 py-2.5 flex text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Shop
                      <span>
                        <ChevronRightIcon className="h-6 w-6" />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen ">
            <div aria-hidden="true" />
            <div className="flex relative">
              <div className="bg-[#E2E2EA] w-[504px] h-[619px]  ">
                <Image
                  src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
              <div className="bg-[#E2E2EA] w-[504px] h-[619px] absolute left-[520px]  ">
                <Image
                  src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
