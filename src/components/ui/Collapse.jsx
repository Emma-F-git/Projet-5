import React, { useState } from "react";
import "../../styles/Collapse.scss";
import "../../index.css";
import arrowIcon from "../../assets/vector.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
      >
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="flèche dépliante"
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </button>
      <div
        id="collapse-content"
        className={`collapse-content ${isOpen ? "open" : ""}`}
      >
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
