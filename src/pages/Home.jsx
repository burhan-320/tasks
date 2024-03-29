import React from "react";
import Loptop from "../image/loptop.jpeg";
import { useRef } from "react";
// swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { sliderSetting } from "../component/slider";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Home = () => {
  const swiperRef = useRef();
  return (
    <div>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" z-0"
          // {...sliderSetting}
        >
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="relative z-[-1]">
            <section className="text-gray-600  body-font sm:mx-0  lg:mx-0  xl:mx-32">
              <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <p className="text-white py-5">
                    Total Compliance.One Solution.{" "}
                  </p>
                  <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                    The easy way to manage
                    <br className="hidden lg:inline-block" />
                    recruitment Compliance
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed beard tote bag. Heirloom echo
                    chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center py-5">
                    <button className=" text-white bg-transparent  py-2 px-6  btn2 rounded text-lg">
                      Get in Tech
                    </button>
                    <button className="ml-4  text-white  border-0 py-2 px-7 btn2 rounded text-lg">
                      Start Now
                    </button>
                  </div>
                </div>
                <div
                //   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <img
                    className="object-cover  h-96   object-center rounded"
                    alt="hero"
                    src={Loptop}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>

          <div className=" flex justify-center btnArrow">
            <span
              className="ico "
              onClick={() => swiperRef.current.slidePrev()}
            >
              <ArrowBackIcon />
            </span>
            <span
              className="ico ml-5"
              onClick={() => swiperRef.current.slideNext()}
            >
              <ArrowForwardIcon />
            </span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
