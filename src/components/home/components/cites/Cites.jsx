import React from "react";
import mumbai from "../../../../assist/images/mumbai.png";
import delhi from "../../../../assist/images/delhi.png";
import bengaluru from "../../../../assist/images/bangluru.png";
import hyderabad from "../../../../assist/images/hyderabad.png";
import chandigarh from "../../../../assist/images/chandigarh.png";
import chennai from "../../../../assist/images/chennai.png";
import { RightArrowIcon } from "../../../../assist/svgs/svgs";

export const Cites = () => {
  return (
    <>
      <section>
        <div className="container m-auto">
          <div className="cites w-9/12 m-auto bg-white border border-semiLightGray rounded-lg px-6 py-3 md:w-[90%]">
            <div className="flex justify-center items-center gap-[40px] sm:gap-4">
              <div className="flex flex-col justify-center items-center w-20 h-20">
                <div className="bg-lightBlue rounded-[50%] w-full h-full">
                  <img src={mumbai} alt="mumbai" className="w-full h-full" />
                </div>
                <p className="font-normal">Mumbai</p>
              </div>

              <div className="flex flex-col justify-center items-center lmd:hidden sm:block">
                <div className="flex justify-center items-center bg-lightBlue rounded-[50%] w-20 h-20">
                  <img src={delhi} alt="delhi" className="w-7/12 h-7/12" />
                </div>
                <p className="font-normal">Delhi-NCR</p>
              </div>

              <div className="flex flex-col justify-center items-center lg:hidden sm:block xsm:hidden">
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

              <div className="flex flex-col justify-center items-center lg:hidden">
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
    </>
  );
};
