import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [isLeftAnimated, setIsLeftAnimated] = useState(false);
  const [isRightAnimated, setIsRightAnimated] = useState(false);
  const [fadeInRight, setFadeInRight] = useState("animate__fadeInRight");
  const [fadeOutRight, setFadeOutRight] = useState("animate__fadeOutRight");

  const toggleRight = () => {
    setShowRight(!showRight);
  };
  const toggleLeft = () => {
    setShowLeft(!showLeft);
  };

  useEffect(() => {
    setTimeout(() => {
      toggleRight();
      setIsRightAnimated(true);
    }, 250);
  }, []);

  const goBack = () => {
    setIsLeftAnimated(false);
    
    setTimeout(() => {
      toggleLeft();
      setShowRight(true);
      setIsRightAnimated(true);
      toggleRight();
    }, 190);
  };
  const goNext = () => {
    setIsRightAnimated(false);
    
    setTimeout(() => {
      toggleRight();
      setShowLeft(true);
      setIsLeftAnimated(true);
      toggleLeft();
    }, 190);
  };

  return (
    <div className="app">
      {showRight ? (
        <div
          className={
            isRightAnimated
              ? "animate__animated animate__fadeInRight  next-btn-bg"
              : "animate__animated animate__fadeOutRight next-btn-bg"
          }
        >
          <div
            onClick={goNext}
            className="fa-solid fa-arrow-right text-white next-btn fa-2xl"
          ></div>
        </div>
      ) : (
        <></>
      )}

      {showLeft ? (
        <div
          className={
            isLeftAnimated
              ? "animate__animated animate__fadeInLeft  back-btn-bg"
              : "animate__animated animate__fadeOutLeft back-btn-bg"
          }
        >
          <div
            onClick={goBack}
            className="fa-solid fa-arrow-left text-white back-btn fa-2xl"
          ></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
