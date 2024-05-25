import React, { useState } from "react";
import results from "../data/results";
import { motion } from "framer-motion";

function Results({ score, onRestart }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const myResults = results.find(
    (entry) => score >= entry.points[0] && score <= entry.points[1]
  );

  const getCompatibility = (ids) => {
    return ids.map((id) => {
      const found = results.find((result) => result.id === id);
      return found ? found.name : <div className="">"Unknown"</div>;
    });
  };
  const avatarVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1 },
  };

  return (
    myResults && (
      <div
        className="relative flex flex-col w-full aspect-[1000/3197]"
        style={{
          background: `url('/results/download/${myResults.image}.png')`,
          backgroundSize: "cover",
        }}
      >
        <button
          className="absolute top-2 left-5 font-semibold"
          onClick={onRestart}
        >
          Home
        </button>
        {/* <button
          className="absolute top-2 right-5 font-semibold"
          onClick={() => downloadImage(`/results/download/${myResults.image}`)}
        >
          Download
        </button> */}
        <a
          href={`/results/download/${myResults.image}.png`}
          download={`${myResults.image}.png`}
          className="absolute top-2 right-5 from-transparent"
        >
          <button className="font-semibold">Download</button>
        </a>
        {/* Your Avatar */}
        <div className="absolute top-[12.3%] left-1/2 -translate-x-1/2 w-[24.8%] aspect-square rounded-full">
          <motion.div
            className="w-full h-full rounded-full"
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            variants={avatarVariants}
            onClick={() => setIsRevealed(true)} // Set to reveal on click
          >
            {/* The image will be revealed */}
            {!isRevealed ? (
              // <div className="w-full h-full bg-[#FDE5D2] rounded-full"></div>
              <div> 
                {/* <img
              src={`/results/illustration/${myResults.image}.png`}
              alt="Avatar"
            /> */}
            </div>
            ) : (
              <div className="w-full h-full">
                <img
                  src={`/results/avatar/${myResults.image}.png`}
                  alt="Avatar"
                />
              </div>
            )}
          </motion.div>
        </div>
        <img src={`/results/banner/${myResults.image}.png`} className="absolute w-[48%] top-[17.3%] left-1/2 -translate-x-1/2" />
        {/* <div className="absolute top-[12.3%] left-1/2 -translate-x-1/2 w-[25%] aspect-square rounded-full border-2 border-dashed ">
          <img src={`/results/illustration/${myResults.image}`}/>ddd
        </div> */}
      </div>
    )
  );
}

export default Results;
