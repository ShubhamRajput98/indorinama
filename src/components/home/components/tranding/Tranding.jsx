import Carousel from "better-react-carousel";
import React from "react";
import {
  SqureIcon,
  WhiteLeftArror,
  WhiteRightArrow,
} from "../../../../assist/svgs/svgs";

export const Tranding = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-14 lmd:px-4">
          <div className="bg-white border border-semiLightGray px-6 py-6 xsm:px-0">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6 xsm:px-0">
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
    </>
  );
};
