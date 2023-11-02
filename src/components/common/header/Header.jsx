import React from "react";
import { BoltIcon, CartIcon, SearchIcon } from "../../../assist/svgs/svgs";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container m-auto px-20 lg:px-10 md:px-4">
        <div className="flex flex-wrap justify-between gap-3 py-5">
          {/* ========== logo start ========== */}
          <div className="logo">
            <h3 className="text-black text-[28px] leading-8 font-semibold">
              INDORINAMA
            </h3>

            <p className="text-black text-[9px] leading-3 font-medium text-center tracking-[0.36px]">
              ADVERTISING & DIGITAL MARKETING
            </p>
          </div>
          {/* ======== logo end ======== */}

          {/* ========== search start ========== */}
          <div className="search relative">
            <div className="absolute left-3 top-[50%] translate-y-[-50%]">
              <SearchIcon />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="w-[407px] h-full border border-lightGray outline-none rounded-md bg-lightGray px-10 py-1 sm:w-full"
            />

            <div className="absolute right-3 top-[50%] translate-y-[-50%]">
              <BoltIcon />
            </div>
          </div>
          {/* ========== search end ========== */}

          {/* ========== cart start ========== */}
          <div className="cart">
            <div className="flex items-center h-full gap-4">
              <div className="inr">
                <p className="text-black text-base font-normal">INR(Rs)</p>
              </div>

              <div className="cart-icon h-full cursor-pointer">
                <button className="flex justify-center items-center bg-black rounded-[50%] w-[45px] py-3">
                  <CartIcon />
                </button>
              </div>

              <div className="login h-full">
                <button className="bg-black text-white rounded-md px-6 py-3">
                  Log in
                </button>
              </div>
            </div>
          </div>
          {/* ========== cart end ========== */}
        </div>
      </div>
    </header>
  );
};
