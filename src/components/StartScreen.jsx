import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import MobileStart from "./UI/mobile/start/MobileStart";

function StartScreen({ onStart }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MobileStart onStart={onStart} />

      <div className="px-3 flex flex-col justify-center items-center min-h-screen  md:hidden">
        <button
          className="relative max-h-[500px] home_banner"
          onClick={onStart}
        >
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center duration-300 hover:scale-125 z-10">
            <span className="text-xl font-bold sm:text-xs">START</span>
          </div>
          <img
            src="/start_banner.png"
            // src="/start_banner_full.png"
            alt="Start Banner"
            className=" max-h-[inherit]"
          />
          <div className=" h-[75%] w-[44%] absolute left-[1%] right-0 m-auto top-0 bottom-0 rounded-full orbit-container">
            <img
              src="/tiger.png"
              alt="Tiger"
              // className="orbit-item absolute w-[51%] bottom-[37%] left-0 right-[5%] m-auto"
              className="absolute scale-[115%] right-[7%] bottom-[38%]"
            />
            <img
              src="/rabbit.png"
              alt="Rabbit"
              className="absolute scale-[.53] bottom-[4%] right-[-18%]"
              // className="orbit-item absolute w-[22.5%] bottom-[26%] left-[17%] right-0 m-auto"
            />
          </div>
          {/* Title Banner */}
          <img
            src="/start_title_banner.png"
            alt="Start Title Banner"
            className="absolute w-1/2 left-0 right-0 bottom-[4%] m-auto"
          />
          {/* Make the tiger and rabbit orbit */}
          {/* <div className="orbit-container w-[50%] absolute left-0 right-0 mx-auto top-0 bottom-0"> */}
        </button>

      </div>
    </>
  );
}

export default StartScreen;
