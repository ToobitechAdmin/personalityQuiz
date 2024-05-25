import React from "react";
import results from "../data/results";
function Results({ score, onRestart }) {
  // Find the entry that matches the score
  const myResults = results.find(
    (entry) => score >= entry.points[0] && score <= entry.points[1]
  );

  const getCompatibility = (ids) => {
    return ids.map((id) => {
      const found = results.find((result) => result.id === id);
      return found ? found.name : <div className="">"Unknown"</div>;
    });
  };

  return (
    myResults && (
      <div className="flex justify-center items-center min-h-screen md:justify-normal md:items-baseline">
        <div className=" max-w-7xl mx-10 w-full md:mx-4 md:my-5">
          <div className=" grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex-1 flex flex-col">
              <div className="self-center size-28 bg-white rounded-full"></div>
              <h2 className=" text-center font-semibold text-2xl py-2">
                {myResults.name} - {score}
              </h2>
              <p className="">
                {myResults.aboveStatue ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus nisi ratione, soluta dolorem assumenda architecto. Fugiat voluptate ab molestiae."}
              </p>
              <h2 className=" mt-5 mb-4">Personality Traits</h2>
              <div className="grid grid-cols-3 gap-3 justify-center items-center mb-4 text-center md:grid-cols-2">
                {myResults.adjectives.map((adj, index) => (
                  <div
                    key={index}
                    className="bg-teal-600 p-2 overflow-hidden relative whitespace-nowrap text-ellipsis"
                  >
                    {adj}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className=" w-full h-48 bg-white text-black">location</div>
              <h2 className="flex-grow my-2">Most Compatible:</h2>
              <div className="grid grid-cols-3 gap-3 justify-center items-center mb-4 text-center md:grid-cols-2">
                {getCompatibility(myResults.most).map((zodiac, index) => (
                  <div key={index} className="bg-green-500 p-2">
                    {zodiac}
                  </div>
                ))}
              </div>
              <h2 className="flex-grow my-2">Least Compatible:</h2>
              <div className="grid grid-cols-3 gap-3 justify-center items-center mb-4 text-center md:grid-cols-2">
                {getCompatibility(myResults.least).map((zodiac, index) => (
                  <div key={index} className="bg-red-500 p-2">
                    {zodiac}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-2">
            <button
              onClick={onRestart}
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 mt-4 rounded-full"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
      // <div className="text-center">
      //   <h1 className="text-white text-2xl mb-4">Your Score: {score}</h1>
      //   {matchingEntry && (
      //     <>
      //       <h2 className="text-white text-xl mb-2">{matchingEntry.results}</h2>
      //       <p className="text-white mb-4">
      //         Zodiac: {matchingEntry.zodiac || matchingEntry.zodiacs}
      //       </p>
      //       <div className="text-white mb-4 bg-green-600 p-2">
      //         Most Compatible Zodiacs:{" "}
      //         {getCompatibilityZodiacs(matchingEntry.most)}
      //       </div>
      //       <div className="text-white mb-4 bg-red-600 p-2">
      //         Least Compatible Zodiacs:{" "}
      //         {getCompatibilityZodiacs(matchingEntry.least)}
      //       </div>
      //       <div className="grid grid-cols-3 gap-4 justify-center items-center mb-4">
      //         {matchingEntry.adjectives.map((adj, index) => (
      //           <div key={index} className="text-white bg-pink-400 p-2">
      //             {adj}
      //           </div>
      //         ))}
      //       </div>
      //     </>
      //   )}
      //   <button
      //     onClick={onRestart}
      //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      //   >
      //     Return
      //   </button>
      // </div>
    )
  );
}

export default Results;
