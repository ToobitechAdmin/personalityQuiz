import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const MobileModal = ({ children, bannerURL, onClose }) => {
  return (
    <div className="relative flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]">
      <div className="flex w-full">
        <button
          onClick={onClose}
          className="absolute top-[7.95px] right-[0] z-50 size-[35px]" // Adjust positioning as needed
        >
          <CloseIcon />
        </button>
        <div
          className=" w-[35px] aspect-[22/27]"
          style={{
            backgroundImage: "url(/modal/modal_border_top_left.png)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="flex-grow w-max bg-repeat-x bg-top bg-[url('/modal/modal_x.png')] bg-[length:100%_42.95px]" />
        <div
          className=" w-[35px] aspect-[22/27] scale-x-[-1]"
          style={{
            backgroundImage: "url(/modal/modal_border_top_left.png)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      <div className="flex w-full flex-grow">
        <div
          className=" w-[35px] aspect-[33/250]"
          style={{
            backgroundImage: "url(/modal/modal_y.png)",
            backgroundSize: "100% 100%",
          }}
        />
        <div
          className="relative flex-grow w-[calc(100%-70px)]"
          style={{
            backgroundImage: "url(/modal/modal_center.png)",
            backgroundSize: "100%",
          }}
        >
          {children}
        </div>
        <div
          className=" w-[35px] aspect-[33/250] scale-x-[-1]"
          style={{
            backgroundImage: "url(/modal/modal_y.png)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      <div className="flex w-full scale-y-[-1]">
        <div
          className=" w-[35px] aspect-[22/27]"
          style={{
            backgroundImage: "url(/modal/modal_border_top_left.png)",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="flex-grow w-max bg-repeat-x bg-top bg-[url('/modal/modal_x.png')] bg-[length:100%_42.95px]" />
        <div
          className=" w-[35px] aspect-[22/27] scale-x-[-1]"
          style={{
            backgroundImage: "url(/modal/modal_border_top_left.png)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
      <img src={bannerURL} className="absolute bottom-[-4.5%]" />
    </div>
  );
};

export default MobileModal;
