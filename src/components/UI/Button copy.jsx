import React, { useEffect, useRef, useState } from "react";

const Button = ({ option, onAnswer }) => {
  const contentRef = useRef(null);
  const [buttonHeight, setButtonHeight] = useState(80);
  const [buttonWidth, setButtonWidth] = useState(300);

  const updateHeight = () => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight + 32; // Get height based on the element
      setButtonHeight(height);
      setButtonWidth(contentRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // Set an interval to update height every 500ms
    const intervalId = setInterval(updateHeight, 500);

    // Update height initially on mount
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Clean up interval and event listener on component unmount or before re-running the effect
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <div
      className={`relative flex w-full mb-4 cursor-pointer`}
      onClick={() => onAnswer(option.score)}
      style={{ height: buttonHeight }}
    >
      <img src="/button_left_crop.png" className="" />
      <div
        className={`flex-grow w-max flex items-center bg-no-repeat bg-center`}
        style={{
          // height: buttonHeight,
          backgroundImage: "url(/button_center_crop.png)",
          backgroundSize: "100% 100%",
        }}
      >
        <center> <button
          ref={contentRef}
          className=" w-full h-fit my-2 py-2 text-center text-center  border-double border-4 border-gray-500 rounded-full duration-300 hover:border-gray-800"
        >
         <p className="px-4" style={{textAlign: 'center !important'}}>  {option.text}</p>
        </button></center>
      </div>
      <img src="/button_right_crop.png" className=" justify-end items-end" />

      {/* <img className="flex-grow w-max" src="/button_center_crop.png" /> */}
      {/* <div className="absolute inset-0 flex items-center">
        <button
          ref={contentRef}
          className="h-fit py-2 border-double border-4 border-gray-500 rounded-full duration-300 hover:border-gray-800"
        >
          <p className="px-4">
            {option.text} - {option.score}
          </p>
        </button>
      </div> */}
    </div>
  );
};

export default Button;
