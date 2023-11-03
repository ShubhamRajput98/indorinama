import React from "react";
import { NavLink } from "react-router-dom";
import {
  AirPort,
  BtlIcon,
  CinemaIcon,
  DegitalIcon,
  MagzineIcon,
  NewsPaperIcon,
  RadioIcon,
  RightArrowIcon,
  TelevisionIcon,
  TransitIcon,
} from "../../../../assist/svgs/svgs";

export const Services = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-10 py-6 lmd:px-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <NavLink className="bg-black text-white border-lightGray rounded-md py-1 px-4">
              Designing
            </NavLink>
            <NavLink className="bg-white text-black border border-lightGray rounded-md py-1 px-4">
              Digital Marketing
            </NavLink>
            <NavLink className="bg-white text-black border border-lightGray rounded-md py-1 px-4">
              Printing
            </NavLink>
            <NavLink className="bg-white text-black border border-lightGray rounded-md py-1 px-4">
              Corporate Gifting
            </NavLink>
            <NavLink className="bg-white text-black border border-lightGray rounded-md py-1 px-4">
              In Shop Branding
            </NavLink>
            <NavLink className="bg-white text-black border border-lightGray rounded-md py-1 px-4">
              Packaging
            </NavLink>
          </div>
        </div>

        <div className="container m-auto px-14 lmd:px-4">
          <div className="flex flex-wrap justify-center gap-2 border border-semiLightGray px-16 py-6 lmd:px-0 lmd:py-2 sm:gap-4 sm:py-8">
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <RadioIcon />
              <p className="font-medium">Radio</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <CinemaIcon />
              <p className="font-medium">Cinema</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <DegitalIcon />
              <p className="font-medium">Digital</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <AirPort />
              <p className="font-medium">Influencer</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <AirPort />
              <p className="font-medium">Airport</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <TelevisionIcon />
              <p className="font-medium">Television</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <BtlIcon />
              <p className="font-medium">BTL</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <NewsPaperIcon />
              <p className="font-medium">News paper</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <NewsPaperIcon />
              <p className="font-medium">Outdoor</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <TransitIcon />
              <p className="font-medium">Transit</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-white rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <MagzineIcon />
              <p className="font-medium">Magzine</p>
            </div>
            <div className="card flex flex-col justify-center gap-2 items-center bg-black rounded-lg border border-semiLightGray w-44 h-28 hover:border-black xsm:w-36">
              <p className="text-white text-center">View More</p>
              <p className="flex justify-center items-center bg-white rounded-[50%] w-10 h-10">
                <RightArrowIcon />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
