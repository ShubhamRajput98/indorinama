import React from "react";
import {
  FacabookIcon,
  InstagramIcon,
  LinkdinIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
  TwitterIcon,
} from "../../../assist/svgs/svgs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container m-auto">
        <div className="flex flex-wrap pt-6 pb-16 md:justify-center">
          {/* ======= first column start */}
          <div className="column w-3/12 md:w-1/2 sm:w-1/2 sm:mb-4">
            <div className="flex flex-col justify-center items-center h-full w-full sm:justify-start">
              <div className=" px-0 pt-16 md:px-4 sm:pt-0">
                <div className="paragraph">
                  <p className="text-white leading-7 tracking-[0.39px]">
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                </div>
                <div className="flex gap-4 my-6">
                  <div className="flex justify-center items-center h-8 w-8 bg-white rounded-[50%]">
                    <FacabookIcon />
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-white rounded-[50%]">
                    <InstagramIcon />
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-white rounded-[50%]">
                    <LinkdinIcon />
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-white rounded-[50%]">
                    <TwitterIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ======= first column end */}

          {/* ======= second column start */}
          <div className="column w-3/12 md:w-1/2 sm:w-1/2 sm:mb-4">
            <div className="px-10 lg:px-4">
              <h3 className="text-white text-2xl font-semibold lg:text-xl">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-5 mt-5">
                <li>
                  <NavLink className="text-white">Home</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">About Us</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Blog</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">FAQ</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Services</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* ======= second column end */}

          {/* ======= third column start */}
          <div className="column w-3/12 md:w-1/2 sm:w-1/2 sm:mb-4">
            <div className="px-10 lg:px-4">
              <h3 className="text-white text-2xl font-semibold lg:text-xl">
                Our Offerings
              </h3>
              <ul className="flex flex-col gap-5 mt-5">
                <li>
                  <NavLink className="text-white">Radio</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Cinema</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Transit</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Outdoor</NavLink>
                </li>
                <li>
                  <NavLink className="text-white">Promotional Offers</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* ======= third column end */}

          {/* ======= fourth column start */}
          <div className="column w-3/12 md:w-1/2 sm:w-1/2 sm:mb-4">
            <div className="px-10 lg:px-4 md:px-0">
              <h3 className="text-white text-2xl font-semibold lg:text-xl">
                Contact us
              </h3>
              <ul className="flex flex-col gap-7 mt-5">
                <li className="flex gap-6 lg:gap-3">
                  <span>
                    <LocationIcon />
                  </span>
                  <span className="text-white">
                    124 Brooklyn, New York United States
                  </span>
                </li>
                <li className="flex gap-6 lg:gap-3">
                  <span>
                    <PhoneIcon />
                  </span>
                  <span className="text-white">+11 2 3456 7890</span>
                </li>
                <li className="flex gap-6 lg:gap-3">
                  <span>
                    <MessageIcon />
                  </span>
                  <span className="text-white">info@houzing.com</span>
                </li>
              </ul>
            </div>
          </div>
          {/* ======= fourth column end */}
        </div>
      </div>
    </footer>
  );
};
