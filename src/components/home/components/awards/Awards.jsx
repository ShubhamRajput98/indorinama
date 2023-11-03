import React from "react";
import {
  LeftLeafIcon,
  PosterIcon,
  RibbenIcon,
  RightLeafIcon,
} from "../../../../assist/svgs/svgs";

export const Awards = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-14 lmd:px-4">
          <div className="px-6 py-6">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6 xsm:px-0">
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
    </>
  );
};
