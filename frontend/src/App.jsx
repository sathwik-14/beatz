import { useState, useEffect } from "react";
import logoLight from "./assets/logo-light.svg";
import introText from "./assets/intro-text.png";
import heroLogo from "./assets/hero-logo.png";
import Register from "./components/register";
import "./App.css";

function App() {
  const [showRight, setShowRight] = useState(false);
  // const [showLeft, setShowLeft] = useState(false);
  // const [isLeftAnimated, setIsLeftAnimated] = useState(false);
  const [isRightAnimated, setIsRightAnimated] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [fadeOutRegistration, setFadeOutRegistration] = useState(false);
  const toggleRight = () => {
    setShowRight(!showRight);
  };
  // const toggleLeft = () => {
  //   setShowLeft(!showLeft);
  // };

  useEffect(() => {
    setFadeIn(true);
    setTimeout(() => {
      toggleRight();
      setIsRightAnimated(true);
    }, 250);
  }, []);

  const goBack = () => {
    setShowRegistration(false);
    setIsLeftAnimated(false);
    setFadeOutRegistration(true);
    
    setFadeIn(true)
    setTimeout(() => {
      toggleLeft();
      setShowRight(true);
      setIsRightAnimated(true);
      toggleRight();
    }, 190);
  };
  const goNext = () => {
    setFadeIn(false);
    setShowRight(false)
    setShowRegistration(true);
    setTimeout(() => {
      toggleRight();
      // setShowLeft(true);
      // setIsLeftAnimated(true);
      // toggleLeft();
    }, 190);
  };

  return (
    <div className="app">
      {fadeIn ? (<>
        <div className="logos d-flex flex-column animate__animated animate__fadeInLeft">
          <img src={logoLight} alt="logo" className="logo " />
          <img src={heroLogo} alt="hero-logo" className="hero-logo " />
        </div>
        <p className="intro-text animate__animated animate__fadeInLeft">
          Rythm into our new World Sign in now
        </p>
        </>
      ) : (<>
        <div className="logos d-flex flex-column animate__animated animate__fadeOutLeft">
          <img src={logoLight} alt="logo" className="logo " />
          <img src={heroLogo} alt="hero-logo" className="hero-logo " /> 
        </div>
        <p className="intro-text  animate__animated animate__fadeOutLeft">
          Rythm into our new World Sign in now
        </p>
        </>
      )}

      {showRight ? (
        <div
          className="animate__animated animate__fadeInRight  next-btn-bg"
        >
          <div
            onClick={goNext}
            className="fa-solid fa-arrow-right text-dark next-btn fa-xl"
          ></div>
        </div>
      ) : (
        <>
        <div
          className="animate__animated animate__fadeOutRight  next-btn-bg"
        >
          <div
            onClick={goNext}
            className="fa-solid fa-arrow-right text-dark next-btn fa-xl"
          ></div>
        </div></>
      )}

      {/* {showLeft ? (
        <div
          className={
            isLeftAnimated
              ? "animate__animated animate__fadeInLeft  back-btn-bg"
              : "animate__animated animate__fadeOutLeft back-btn-bg"
          }
        >
          <div
            onClick={goBack}
            className="fa-solid fa-arrow-left text-dark back-btn fa-xl"
          ></div>
        </div>
      ) : (
        <></>
      )} */}

       {showRegistration ? (<div className="registration-form animate__animated animate__fadeInRight">
      <Register/></div>):(<></>)}
      {fadeOutRegistration ? (<div className="registration-form animate__animated animate__fadeOutRight">
      <Register/></div>):(<></>)}
    </div>
  );
}

export default App;
