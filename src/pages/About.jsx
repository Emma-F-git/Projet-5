import React from "react";
import Collapse from "../components/ui/Collapse";

function About() {
  return (
    <div className="about">
      <Collapse title="Description"></Collapse>
      <Collapse title="Equipements"></Collapse>
    </div>
  );
}

export default About;
