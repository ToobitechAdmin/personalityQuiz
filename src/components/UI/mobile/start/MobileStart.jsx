import React, { useState } from "react";
import MobileStartBanner from "./MobileStartBanner";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MobileModal from "./MobileModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const MobileStart = ({ onStart }) => {
  const [isAbout, setIsAbout] = useState(false);
  const [isCredits, setIsCredits] = useState(false);

  const handleIsAbout = () => {
    setIsAbout((prevState) => !prevState);
  };
  const handleIsCredits = () => {
    setIsCredits((prevState) => !prevState);
  };

  return (
    // <div className="relative bg-[url('/mobile/mobile_start_background.png')] bg-[length:100%_100%] bg-no-repeat">
    // <div className="relative bg-[#B0CFC7] max-h-screen max-w-[100vw]">
    <div className="bg-[#B0CFC7] min-h-screen hidden lg:block">
      <div className="bg-[url('/mobile/update7.png')] bg-no-repeat bg-cover bg-top">
        {/* <img
      src="/mobile/banner.png"
       className=" max-w-full max-h-full h-[inherit]"
       /> */}
        <div className="relative aspect-[9/16]">
          <div className="relative top-[25.95%] mx-auto w-[55.6%] aspect-square orbit-container">
            <img
              src="/mobile/rabbit.png"
              className="absolute bottom-[-17%] left-[-7%] scale-[.45]"
              // className="absolute"
            />
            <img
              src="/tiger.png"
              className="absolute top-[-7%] left-[-7%] scale-[1.1]"
              // className="absolute"
            />
          </div>
          {/* <img
            src="/start_title_banner.png"
            className="absolute top-[32%] left-[1%] scale-[0.82]"
          /> */}
          <div className="absolute flex flex-col text-white top-[60%] left-1/2 -translate-x-1/2 w-[75%] h-[32%] py-4 text-2xl font-serif">
            <button className="py-3 uppercase" onClick={onStart}>
              Start
            </button>
            <button className="py-3 uppercase" onClick={handleIsAbout}>
              About
            </button>
            <Modal
              open={isAbout}
              onClose={handleIsAbout}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <MobileModal
                bannerURL="/modal/about_banner.png"
                onClose={handleIsAbout}
              >
                <div className="px-4">
                  <h2 className="font-serif text-xl uppercase text-center pb-4 pt-2" style={{fontFamily:"ApercuPro-Medium"}}>
                    Presented By <br /> XploreHawParVilla
                  </h2>
                  <p style={{fontFamily:"ApercuPro-Medium"}} className="text-center">
                    Xplorehawparvilla is a documentation project that captures
                    people's memories at Haw Par Villa. This project was started
                    to learn more about the significance of the park. By sharing
                    interviews, interesting historical facts, and artistic
                    projects inspired by the park onto our social media page, we
                    hope that more people will view Haw Par Villa as a treasure
                    trove of beautiful memories.
                  </p>
                </div>
              </MobileModal>
            </Modal>
            <button className="py-3 uppercase" onClick={handleIsCredits}>
              Credits
            </button>
            <Modal
              open={isCredits}
              onClose={handleIsCredits}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <MobileModal
                bannerURL="/modal/credit_banner.png"
                onClose={handleIsCredits}
              >
                <div>
                  <h2 className=" font-serif text-xl uppercase text-center">
                    Created with love by
                  </h2>
                  <div className=" mt-10 gap-2 flex flex-col text-base">
                    <div className="flex flex-col mb-2 items-center">
                      <p className="font-semibold text-lg">
                        Project Lead & Illustrator
                      </p>
                      <p>Amelia</p>
                    </div>
                    <div className="flex flex-col mb-2 items-center">
                      <p className="font-semibold text-lg">Illustrator</p>
                      <p>Shermaine</p>
                    </div>
                    <div className="flex flex-col mb-2 items-center">
                      <p className="font-semibold text-lg">
                        Research and Copywriter
                      </p>
                      <p>Kimberly</p>
                    </div>
                    <div className="flex flex-col mb-2 items-center">
                      <p className="font-semibold text-lg">
                        Research Assistance
                      </p>
                      <p>Kendra</p>
                    </div>
                    <div className="flex flex-col mb-2   items-center">
                      <p className="font-semibold text-lg">Web Developer</p>
                      <p>Zheng Xiang</p>
                    </div>
                  </div>
                </div>
              </MobileModal>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStart;
