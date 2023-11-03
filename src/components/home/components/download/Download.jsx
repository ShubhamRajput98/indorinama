import React from "react";

import playStore from "../../../../assist/images/google play .png";
import appStore from "../../../../assist/images/app store .png";

export const Download = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-14 py-6 lmd:px-4">
          <div className="bg-mahrun rounded-xl px-16 sm:px-6">
            <h1 className="text-white text-[52px] font-semibold py-6 sm:text-[40px] xsm:text-[33px]">
              Download the App
            </h1>
            <p className="text-white text-[20px] font-semibold pb-3 ">
              Sell your old phone | Buy top-qulaity refurbished phones | <br />
              Get your phone repaired
            </p>
            <div className="flex flex-wrap gap-4 py-3">
              <img src={playStore} alt="play store" />
              <img src={appStore} alt="play store" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
