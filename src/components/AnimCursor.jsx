import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={40}
      color="252,166,31"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.5}
      outerStyle={{
        border: "2px solid #3f396d",
        backgroundColor: "transparent",
      }}
    />
  );
}

export default AnimCursor;
