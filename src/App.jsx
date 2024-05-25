import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);
  const [browser, setBrowser] = useState('unknown'); // State for storing the browser type

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleReset = () => {
    setQuizStarted(false);
  };

  const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    const browsers = { chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i, edge: /edge/i };

    console.log(userAgent);

    for (const key in browsers) {
      if (browsers[key].test(userAgent)) {
        return key;
      }
    }    return 'unknown';
  };

  useEffect(() => {
    setBrowser(detectBrowser());

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    // Lock the screen orientation to portrait
    if (screen.orientation) {
      screen.orientation.lock("portrait").catch(function (error) {
        console.error(`Could not lock the screen orientation: ${error}`);
      });
    }
  });

  if (isMobile && isLandscape) {
    return (
      <div className="app min-h-screen flex items-center justify-center">
        <p>Please rotate device</p>
      </div>
    );
  }
  
  if (!isMobile) {
    return (
      <div className="app min-h-screen flex items-center justify-center text-3xl">
        <p>Website not compatible. Please open in mobile mode</p>
      </div>
    );
  }

  // Main component content
  return (
    <div className="bg-black app min-h-screen font-sans">
      {quizStarted ? (
        <Quiz onRestart={() => setQuizStarted(false)} />
      ) : (
        <StartScreen onStart={handleStart} />
      )}
    </div>
  );
}

export default App;
