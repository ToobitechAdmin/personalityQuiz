import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "none", // removes default focus outline
};
function StartScreen({ onStart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-white p-4">
        <div className="text-center flex flex-col">
          <h1 className="text-4xl font-bold mb-4 tracking-wide">
            THE HAW PAR VILLA
          </h1>
          <p className="text-lg mb-8 tracking-widest">PERSONALITY TEST</p>
          <button
            onClick={onStart}
            className="bg-yellow-400 text-black border-yellow-400 border-2 rounded-full py-2 mb-3 text-xl font-semibold transition-all hover:bg-yellow-500 hover:border-yellow-500"
          >
            Start
          </button>
          <button className="border-yellow-400 border-2 rounded-full py-2 my-3 text-lg transition-all hover:text-yellow-500 hover:border-yellow-500">
            About
          </button>
          <button className=" border-yellow-400 border-2 rounded-full py-2 mt-3 text-lg transition-all hover:text-yellow-500 hover:border-yellow-500">
            Credits
          </button>
        </div>
        <div className="absolute bottom-4 left-5">
          <p>Presented by XPLOREHAWPARVILLA</p>
          <p>In Conjuction with Singapore HeritageFest 2024</p>
        </div>
      </div>
    </>
  );
}

export default StartScreen;
