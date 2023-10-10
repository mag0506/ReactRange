import React, { useEffect } from "react";
// import anime from "animejs";
import Anime, { anime } from "react-anime";

function AnimeDivFill() {
  useEffect(() => {
    const animation = anime({
      targets: ".fill-div",
      width: "100%", // Set the target width to 100%
      duration: 20, // Animation duration in milliseconds
      easing: "linear",
      loop: true // Linear easing for a constant speed
    });

    return () => {
      // Cleanup the animation when the component unmounts
      animation.pause(); // You can also use .reset() or .remove() as needed
    };
  }, []);

  return (
    <div className="container">
      <div className="fill-div">
        <Anime
          // loop={true}
          delay={1000}
          duration={3000}
          easing="linear"
          scale={[0.9, 1]}
        >
          <div
            style={{ height: "200px", width: "200px", background: "green" }}
          ></div>
        </Anime>
      </div>
    </div>
  );
}

export default AnimeDivFill;
