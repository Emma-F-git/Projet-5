import React, { useState } from "react";
import "../../styles/Collapse.scss";
import "../../index.css";

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
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      <div
        id="collapse-content"
        className={`collapse-content ${isOpen ? "open" : ""}`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;
