import React from "react";
import indorinama from "../../../../assist/images/indorinama.png";
import story from "../../../../assist/images/story.png";
import print from "../../../../assist/images/print.png";
import bhopu from "../../../../assist/images/bhopu.png";
import corporate from "../../../../assist/images/corporate.png";
import packaging from "../../../../assist/images/packaging.png";

export const Venture = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-14 lmd:px-4">
          <div className="px-16 xsm:px-0">
            <div className="heading">
              <h3 className="text-[32px] text-center font-medium px-6 xsm:px-0">
                <span className="border-r-[4px] border-black rounded-e-md me-2"></span>
                Our Venture
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 py-10">
              <img src={indorinama} alt="indorinama" />
              <img src={story} alt="story" />
              <img src={print} alt="print" />
              <img src={bhopu} alt="bhopu" />
              <img src={corporate} alt="corporate" />
              <img src={packaging} alt="packaging" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
