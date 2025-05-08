import React, { useState } from "react";
import "../../styles/Slideshow.scss";
import leftArrow from "../../assets/arrowLeft.svg";
import rightArrow from "../../assets/arrowRight.svg";

function SlideShow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {length > 1 && (
        <>
          <button
            className="nav left"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <img src={leftArrow} alt="Flèche gauche" />
          </button>
          <button
            className="nav right"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <img src={rightArrow} alt="Flèche droite" />
          </button>
          <div className="counter">
            {currentIndex + 1} / {length}
          </div>
        </>
      )}
    </div>
  );
}

export default SlideShow;
