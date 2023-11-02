import React from "react";
import { NavLink } from "react-router-dom";

import Carousel from "better-react-carousel";

// import images
import mumbai from "../../assist/images/mumbai.png";
import delhi from "../../assist/images/delhi.png";
import bengaluru from "../../assist/images/bangluru.png";
import hyderabad from "../../assist/images/hyderabad.png";
import chandigarh from "../../assist/images/chandigarh.png";
import chennai from "../../assist/images/chennai.png";
import men from "../../assist/images/men.png";
import playStore from "../../assist/images/google play .png";
import appStore from "../../assist/images/app store .png";
import girl from "../../assist/images/girl.png";

// import svgs
import {
  AirPort,
  BtlIcon,
  CinemaIcon,
  CotsIcon,
  DegitalIcon,
  LeftLeafIcon,
  MagzineIcon,
  NewsPaperIcon,
  PosterIcon,
  RadioIcon,
  RibbenIcon,
  RightArrowIcon,
  RightLeafIcon,
  SmallRightArrow,
  SqureIcon,
  StarIcon,
  TelevisionIcon,
  TransitIcon,
  WhiteLeftArror,
  WhiteRightArrow,
} from "../../assist/svgs/svgs";

export const Home = () => {
  return (
    <>
      {/* ====== cites start ====== */}
      <section>
        <div className="container m-auto">
          <div className="cites w-9/12 m-auto bg-white border border-semiLightGray rounded-lg px-6 py-3 xl:w-[90%] md:w-full">
            <div className="flex justify-center items-center gap-[60px] sm:gap-4">
              <div className="flex flex-col justify-center items-center w-20 h-20">
                <div className="bg-lightBlue rounded-[50%] w-full h-full">
                  <img src={mumbai} alt="mumbai" className="w-full h-full" />
                </div>
                <p className="font-normal">Mumbai</p>
              </div>

              <div className="flex flex-col justify-center items-center  lg:hidden">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img src={delhi} alt="delhi" className="w-7/12 h-7/12" />
                </div>
                <p className="font-normal">Delhi-NCR</p>
              </div>

              <div className="flex flex-col justify-center items-center lg:hidden">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img
                    src={bengaluru}
                    alt="bengaluru"
                    className="w-10/12 h-10/12"
                  />
                </div>
                <p className="font-normal">Bengaluru</p>
              </div>

              <div className="flex flex-col justify-center items-center sm:hidden">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img
                    src={hyderabad}
                    alt="hyderabad"
                    className="w-7/12 h-17/12"
                  />
                </div>
                <p className="font-normal">Hyderabad</p>
              </div>

              <div className="flex flex-col justify-center items-center sm:hidden">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img
                    src={chandigarh}
                    alt="chandigarh"
                    className="w-7/12 h-17/12"
                  />
                </div>
                <p className="font-normal">Chandigarh</p>
              </div>

              <div className="flex flex-col justify-center items-center xl:hidden">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img src={chennai} alt="chennai" className="w-7/12 h-17/12" />
                </div>
                <p className="font-normal">Chennai</p>
              </div>

              <div className="flex flex-col justify-center items-center view-all bg-black rounded-md cursor-pointer w-28 p-2">
                <p className="text-white text-center">View All Cities</p>
                <p className="flex justify-center items-center bg-white rounded-[50%] w-10 h-10">
                  <RightArrowIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== cites end ====== */}

      {/* ====== slider start ====== */}
      <section>
        <div className="container m-auto px-8 lmd:px-4">
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop
            showDots={true}
            arrowLeft={
              <span
                type="prev"
                className="ArrowButton__Button-sc-1ikb0hj-1 bBfHpH"
              >
                <WhiteLeftArror />
              </span>
            }
            arrowRight={
              <span
                type="next"
                className="ArrowButton__Button-sc-1ikb0hj-1 dZkckO"
              >
                <WhiteRightArrow />
              </span>
            }
          >
            <Carousel.Item>
              <div className="bg-mahrun rounded-2xl h-[427px] lg:h-[300px]">
                <div className="flex justify-between items-center px-32 h-full lg:px-4">
                  <div className="content w-[400px] md:w-[300px]">
                    <h2 className="text-white font-semibold text-[52px] text-left lg:text-[40px] md:text-[25px]">
                      Sell Old Phone
                    </h2>
                    <p className="text-white font-medium text-[20px] text-left my-6 lg:text-[16px] md:my-2">
                      From Your Doorstep or at any of our 200 stores Pan India
                    </p>
                    <button className="flex justify-center items-center gap-4 bg-white font-medium rounded-lg px-12 py-4 mt-16 sm:mt-3 md:px-4 ">
                      Sell Now
                      <span className="flex justify-center items-center bg-black rounded-[50%] h-6 w-6">
                        <SmallRightArrow />
                      </span>
                    </button>
                  </div>
                  <div className="img flex items-end h-full">
                    <img src={men} className="w-10/12 h-10/12" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="bg-mahrun rounded-2xl h-[427px] lg:h-[300px]">
                <div className="flex justify-between items-center px-32 h-full lg:px-4">
                  <div className="content w-[400px] md:w-[300px]">
                    <h2 className="text-white font-semibold text-[52px] text-left lg:text-[40px] md:text-[25px]">
                      Sell Old Phone
                    </h2>
                    <p className="text-white font-medium text-[20px] text-left my-6 lg:text-[16px] md:my-2">
                      From Your Doorstep or at any of our 200 stores Pan India
                    </p>
                    <button className="flex justify-center items-center gap-4 bg-white font-medium rounded-lg px-12 py-4 mt-16 sm:mt-3 md:px-4 ">
                      Sell Now
                      <span className="flex justify-center items-center bg-black rounded-[50%] h-6 w-6">
                        <SmallRightArrow />
                      </span>
                    </button>
                  </div>
                  <div className="img flex items-end h-full">
                    <img src={men} className="w-10/12 h-10/12" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      {/* ====== slider end ====== */}

      {/* ====== services start ====== */}
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
      {/* ====== services end ====== */}

      {/* ====== tranding offers start ====== */}
      <section>
        <div className="container m-auto px-14 lmd:px-4">
          <div className="bg-white border border-semiLightGray px-6 py-6">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6">
                <span className="border-r-[4px] border-black rounded-e-md me-2"></span>
                Trendings Offers
              </h3>
            </div>
            <Carousel
              cols={4}
              rows={1}
              gap={10}
              loop={true}
              scrollSnap={true}
              responsiveLayout={[
                {
                  breakpoint: 1024,
                  cols: 3,
                  rows: 1,
                  gap: 10,
                  loop: true,
                },
                {
                  breakpoint: 980,
                  cols: 2,
                  rows: 1,
                  gap: 10,
                  loop: true,
                },
              ]}
              arrowLeft={
                <span
                  type="prev"
                  className="ArrowButton__Button-sc-1ikb0hj-1 bBfHpH"
                >
                  <WhiteLeftArror />
                </span>
              }
              arrowRight={
                <span
                  type="next"
                  className="ArrowButton__Button-sc-1ikb0hj-1 dZkckO"
                >
                  <WhiteRightArrow />
                </span>
              }
            >
              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #154295 0%, #366BC7 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 250 on bus tickets
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #2D536A 0%, #49BB8A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #5F0D12 0%, #C2434A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #154295 0%, #366BC7 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 250 on bus tickets
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #2D536A 0%, #49BB8A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #5F0D12 0%, #C2434A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #2D536A 0%, #49BB8A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className="w-full pl-20 pt-2 pb-2 pe-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #5F0D12 0%, #C2434A 100%)",
                  }}
                >
                  <div className="bag">
                    <span className="bg-blue inline-block text-white rounded-[40px] px-6 py-2">
                      BUS
                    </span>
                  </div>
                  <div className="para pt-3">
                    <p className="text-white font-medium">
                      Save up to Rs 300 in AP,TS routes
                    </p>
                  </div>
                  <div className="sub py-3">
                    <p className="text-white text-[11px]">Valid Till 30 Sep</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-white text-[11px] py-1 px-5 border-[1px] border-white">
                      First
                    </p>
                    <p>
                      <SqureIcon />
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* ====== tranding offers end ====== */}

      {/* ====== our latest awards start ====== */}
      <section>
        <div className="container m-auto px-14 lmd:px-4">
          <div className="px-6 py-6">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6">
                <span className="border-r-[4px] border-black rounded-e-md me-2"></span>
                Our Latest Awards
              </h3>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-10">
              <div className="leaf lg:hidden">
                <LeftLeafIcon />
              </div>

              <div className="card relative">
                <PosterIcon />

                <div className="absolute top-8 left-1/2 translate-x-[-50%] text-center font-medium">
                  Best Support
                </div>

                <div className="absolute top-[5.5em] left-1/2 translate-x-[-50%]">
                  <RibbenIcon />
                  <div className="absolute text-white text-[14px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    Summer
                  </div>
                </div>

                <div className="absolute text-[20px] font-medium bottom-5 left-1/2 translate-x-[-50%]">
                  2023
                </div>
              </div>
              <div className="card relative">
                <PosterIcon />

                <div className="absolute top-8 left-1/2 translate-x-[-50%] text-center font-medium">
                  Best Support
                </div>

                <div className="absolute top-[5.5em] left-1/2 translate-x-[-50%]">
                  <RibbenIcon />
                  <div className="absolute text-white text-[14px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    Summer
                  </div>
                </div>

                <div className="absolute text-[20px] font-medium bottom-5 left-1/2 translate-x-[-50%]">
                  2023
                </div>
              </div>

              <div className="card relative">
                <PosterIcon />

                <div className="absolute top-8 left-1/2 translate-x-[-50%] text-center font-medium">
                  Best Support
                </div>

                <div className="absolute top-[5.5em] left-1/2 translate-x-[-50%]">
                  <RibbenIcon />
                  <div className="absolute text-white text-[14px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    Summer
                  </div>
                </div>

                <div className="absolute text-[20px] font-medium bottom-5 left-1/2 translate-x-[-50%]">
                  2023
                </div>
              </div>

              <div className="leaf lg:hidden">
                <RightLeafIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== our latest awards end ====== */}

      {/* ====== download the app start ====== */}
      <section>
        <div className="container m-auto px-14 py-6 lmd:px-4">
          <div className="bg-mahrun rounded-xl px-16 sm:px-6">
            <h1 className="text-white text-[52px] font-semibold py-6 sm:text-[40px]">
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
      {/* ====== download the app end ====== */}

      {/* ====== what our clients say start ====== */}
      <section>
        <div className="container m-auto px-4 ">
          <div className="px-6 py-3">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6">
                <span className="border-r-[4px] border-black rounded-e-md me-2"></span>
                What Our Clients Say
              </h3>
            </div>
            <Carousel
              cols={4}
              rows={1}
              gap={20}
              loop={true}
              scrollSnap={true}
              responsiveLayout={[
                {
                  breakpoint: 1024,
                  cols: 3,
                  rows: 1,
                  gap: 10,
                  loop: true,
                },
                {
                  breakpoint: 980,
                  cols: 2,
                  rows: 1,
                  gap: 10,
                  loop: true,
                },
              ]}
              arrowLeft={
                <span
                  type="prev"
                  className="ArrowButton__Button-sc-1ikb0hj-1 bBfHpH"
                >
                  <WhiteLeftArror />
                </span>
              }
              arrowRight={
                <span
                  type="next"
                  className="ArrowButton__Button-sc-1ikb0hj-1 dZkckO"
                >
                  <WhiteRightArrow />
                </span>
              }
            >
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-white w-full p-6 rounded-xl">
                  <div className="bag">
                    <CotsIcon />
                  </div>
                  <div className="para pt-3">
                    <p className="text-[11.4px] font-normal">
                      Cashify has been a Fantastic Startup that has brought so
                      much value to the Indian customer.we are Proud to partner
                      with them and help our Mi fans get better exchange value
                      for our phones!
                    </p>
                  </div>
                  <div className="sub py-2">
                    <p className="text-[11.4px] font-normal">
                      Manu jain is a leading indian entrepreneur & VP of Xiaomi
                      which is one of india,s Largest smartphone Brands.
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 mt-4 border-t-2">
                    <div className="flex items-center gap-2 pt-2">
                      <img src={girl} alt="image" />
                      <div>
                        <h4 className="text-[14.4px] font-medium">Manu Jain</h4>
                        <p className="text-[9px] text-lightPurpal font-normal">
                          VP & MD, Xiaomi India
                        </p>
                      </div>
                    </div>
                    <div className="star">
                      <StarIcon />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* ====== what our clients say end ====== */}
    </>
  );
};
