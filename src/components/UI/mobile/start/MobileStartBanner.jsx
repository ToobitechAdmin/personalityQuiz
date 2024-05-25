import React from "react";

const MobileStartBanner = ({ onStart }) => {
  return (
    <div className="relative flex flex-col justify-start items-center min-h-screen w-screen pt-[50px] pr-[28px] pl-[31px] pb-[50px]">
      <div id="start_banner_top" className="flex w-full">
        <div
          className=" w-[67.5px] aspect-[6/7]"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_top_left.png)",
            backgroundSize: "100% 100%",
          }}
        />
        <div
          className="flex-grow w-max h-5 bg-repeat-x bg-top"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_top_center.png)",
            backgroundSize: "100% 7px",
          }}
        />
        <div
          className=" w-[67.5px] aspect-[6/7]"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_top_right.png)",
            backgroundSize: "100% 100%",
          }}
        />
        {/* <img
          src="/mobile/mobile_start_banner_top_left.png"
          className="absolute top-[8.15%] left-[6.2%] scale-[.75]"
        />
        <img
          src="/mobile/mobile_start_banner_top_center.png"
          className="absolute scale-[.70] top-[67px] left-[0]"
        />
        <img
          src="/mobile/mobile_start_banner_top_right.png"
          className="absolute top-[8.15%] right-[6.2%] scale-[.75]"
        /> */}
      </div>
      <div id="start_banner_center" className="flex w-full flex-grow">
        <div
          className="w-[7px] ml-[2.5px]"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_sides.png)",
            backgroundSize: "7px 100%",
          }}
        />
        <div
          className="relative flex-grow bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner.png)",
            backgroundSize: "100% calc(50% + 85.75px)",
          }}
        >
          <div className="relative flex justify-center w-full h-[calc(50%+71.75px)] top-[-71.75px]">
            <div className="absolute flex justify-center max-w-[78%] max-h-[78%] w-[inherit] aspect-square bottom-[2%]">
              <div className="relative max-w-[100%] max-h-[100%] aspect-square">
                <img
                  src="/mobile/mobile_start_banner_eclipse.png"
                  className="absolute w-full h-full"
                />
                <div>
                  <img
                    src="/tiger.png"
                    className="absolute top-[-20%] left-[-16%] scale-[1.2]"
                  />
                  <img src="/mobile/rabbit.png" className="absolute bottom-[-15%] scale-[.6]" />
                </div>
                <img src="/start_title_banner.png" className="absolute scale-[1.5] top-[23%]"/>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center w-full h-[calc(50%)] top-[-71.75px] text-white text-2xl">
            <button className="py-3 uppercase" onClick={onStart}>
              Start
            </button>
            <button className="py-3 uppercase">About</button>
            <button className="py-3 uppercase">Credits</button>
          </div>
          {/* <div className="absolute flex flex-col w-full bottom-[20%] text-2xl text-white z-10">
            <button className="py-2 uppercase">Start</button>
            <button className="py-2 uppercase">About</button>
            <button className="py-2 uppercase">Credits</button>
          </div> */}
        </div>
        <div
          className="w-[7px] mr-[2.5px]"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_sides.png)",
            backgroundSize: "7px 100%",
          }}
        />
      </div>
      <div id="start_banner_bottom" className="flex w-full">
        <div
          className=" w-[7px] aspect-square ml-[2.5px] h-max"
          style={{
            backgroundImage: "url(/mobile/mobile_start_banner_bottom_left.png)",
            backgroundSize: "7px 7px",
          }}
        />
        <div
          className="flex-grow w-max h-5 bg-repeat-x bg-top"
          style={{
            backgroundImage:
              "url(/mobile/mobile_start_banner_bottom_center.png)",
            backgroundSize: "100% 7px",
          }}
        />
        <div
          className=" w-[7px] aspect-square h-max mr-[2.5px]"
          style={{
            backgroundImage:
              "url(/mobile/mobile_start_banner_bottom_right.png)",
            backgroundSize: "7px 7px",
          }}
        />
      </div>
      <div id="layovers" className=" w-full h">
        {/* <img src="/mobile/mobile_start_banner_eclipse.png" className="absolute inset-0 top-[25%] left-[20%] w-[59%]"/>
        <img
          src="/tiger.png"
          className="absolute inset-0 top-[17%] left-[3%] w-[75%]"
        />
        <img
          src="/rabbit.png"
          className="absolute inset-0 top-[47.5%] left-[45.5%] w-[40%]"
        />
          <img
            src="/start_title_banner.png"
            className="absolute inset-0 left-[0.5%] top-[31%] w-full"
          /> */}
      </div>
    </div>
  );
};

export default MobileStartBanner;
