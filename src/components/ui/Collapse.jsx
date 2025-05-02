import React, { useState } from "react";
import "../../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;
