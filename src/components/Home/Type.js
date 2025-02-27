import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Freelancer",
          "MERN Stack Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 30,
      }}
    />
  );
}

export default Type;
