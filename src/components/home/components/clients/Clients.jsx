import Carousel from "better-react-carousel";
import React from "react";
import {
  CotsIcon,
  StarIcon,
  WhiteLeftArror,
  WhiteRightArrow,
} from "../../../../assist/svgs/svgs";
import girl from "../../../../assist/images/girl.png";

export const Clients = () => {
  return (
    <>
      <section>
        <div className="container m-auto px-4 ">
          <div className="px-6 py-3 xsm:px-0">
            <div className="heading mb-10">
              <h3 className="text-[32px] text-center font-medium px-6 xsm:px-0">
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
    </>
  );
};
