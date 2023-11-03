import Carousel from "better-react-carousel";
import React from "react";
import {
  SmallRightArrow,
  WhiteLeftArror,
  WhiteRightArrow,
} from "../../../../assist/svgs/svgs";
import men from "../../../../assist/images/men.png";

export const SliderBanner = () => {
  return (
    <>
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
                    <button className="flex justify-center items-center gap-4 bg-white font-medium rounded-lg px-12 py-4 mt-16 sm:mt-3 md:px-4 xsm:py-3">
                      Sell Now
                      <span className="flex justify-center items-center bg-black rounded-[50%] h-6 w-6">
                        <SmallRightArrow />
                      </span>
                    </button>
                  </div>
                  <div className="img flex items-end h-full">
                    <img
                      src={men}
                      className="w-10/12 h-10/12 xsm:w-full xsm:h-[80%]"
                    />
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
                    <button className="flex justify-center items-center gap-4 bg-white font-medium rounded-lg px-12 py-4 mt-16 sm:mt-3 md:px-4 xsm:py-3">
                      Sell Now
                      <span className="flex justify-center items-center bg-black rounded-[50%] h-6 w-6">
                        <SmallRightArrow />
                      </span>
                    </button>
                  </div>
                  <div className="img flex items-end h-full">
                    <img
                      src={men}
                      className="w-10/12 h-10/12 xsm:w-full xsm:h-[80%]"
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};
