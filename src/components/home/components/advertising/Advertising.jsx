import React from "react";
import {
  ClientIcon,
  CompaignsIcon,
  MediaOptionIcon,
  SmallBlackRightArrow,
  TeamMemberIcon,
  VarticalsIcon,
  VenderIcon,
} from "../../../../assist/svgs/svgs";

export const Advertising = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-14 py-6 lmd:px-4">
          <div className="bg-white border border-semiLightGray rounded-xl px-16 py-6 xsm:px-4">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6 xsm:px-0">
                <span className="border-r-[4px] border-black rounded-e-md me-2"></span>
                Your Perfect Advertising Partner
              </h3>
            </div>
            <div className="para">
              <p className="text-center font-medium">
                Excellent Publicity is forever expanding your brand with high
                quality service that combines creativity with value pricing. We
                enjoy our work because, first - we admire the advertising world,
                and second, we know that our ideas and strategies make a
                difference. We play to win, with the primary goal of assisting
                our customers in promoting their successful brand campaigns.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 py-6">
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <ClientIcon />
                <p className="text-[11px] font-normal text-center">
                  Happy Clients
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <TeamMemberIcon />
                <p className="text-[11px] font-normal text-center">
                  Qualified Team Members
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <MediaOptionIcon />
                <p className="text-[11px] font-normal text-center">
                  Media Options
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <VenderIcon />
                <p className="text-[11px] font-normal text-center">
                  Vendor tie-ups
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <CompaignsIcon />
                <p className="text-[11px] font-normal text-center">Compaigns</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 bg-white border border-semiLightGray rounded-lg w-28 h-[121px] p-3">
                <VarticalsIcon />
                <p className="text-[11px] font-normal text-center">Varticals</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center gap-3 bg-black text-white rounded-md px-10 py-2 ">
                About Us
                <span className="flex justify-center items-center bg-white rounded-[50%] p-1">
                  <SmallBlackRightArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
