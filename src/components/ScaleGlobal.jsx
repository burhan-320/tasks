import React from "react";
import sidePic from "../image/Capture.PNG";
import sidePic1 from "../image/Capture 1.PNG";
import sidePic2 from "../image/Capture 2.PNG";

const ScaleGlobal = () => {
  return (
    <div className="bg-[#F5F9FC]  global">
      <div className="mx-auto lg:mx-5 xl:mx-32 ">
        <p className="pt-20 text-[#43c7ec] mx-5 font-semibold">Scale Global</p>
        <h1 className="title-font font-bold mx-5 sm:text-3xl pt-5 text-3xl  text-gray-900">
          Go Global with a single Integration
        </h1>
        <div class="container  flex  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-10  md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className=" mx-5 xl:mr-16">
              <img src={sidePic1} alt="" />
              <h1 className="text-lg font-medium py-3">
                Launch a global marketplace
              </h1>
              <p className=" xl:mr-28">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facilis commodi illo molestiae, aperiam rerum. Ipsa sunt autem
                doloribus sit, eaque alias, assumenda aut, at laboriosam
              </p>
            </div>
            <div className="mx-5 lx:mr-16 pt-8">
              <img src={sidePic2} alt="" />
              <h1 className="text-lg font-medium py-3">
                Minimise regulatory and Compliance overhead
              </h1>
              <p className=" xl:mr-28">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facilis commodi illo molestiae, aperiam rerum. Ipsa sunt autem
                doloribus sit, eaque alias, assumenda aut, at laboriosam
              </p>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover h-[32rem]  object-center rounded"
              alt="hero"
              src={sidePic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleGlobal;
