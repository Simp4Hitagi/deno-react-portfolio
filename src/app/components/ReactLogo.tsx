import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

const ReactLogoAnimation = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    const circles = circleRefs.current;

    // Define animation properties for each circle
    const circleAnimations = circles.map((circle, index) => {
      const delay = index * 300; // Adjust delay for desired sequence
      const duration = 1000; // Adjust duration for animation speed
      const easing = 'easeInOutCubic'; // Customize easing for desired effect

      return anime({
        targets: circle,
        strokeDashoffset: [anime.setDashoffset([256, 256]), 0],
        strokeDasharray: [256, 256],
        opacity: [0, 1],
        easing,
        duration,
        delay,
        loop: false,
      });
    });

    // Start all animations together for a synchronized effect
    anime.all(circleAnimations).play();

    return () => {
      // Clean up animations on unmount to prevent memory leaks
      circleAnimations.forEach(anim => anim.pause());
    };
  }, []);

  return (
    <svg className="react-logo-animation" width="100" height="100" viewBox="0 0 100 100">
      <circle
        ref={el => circleRefs.current.push(el)}
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#61DAFB"
        strokeWidth="4"
        strokeDasharray="256 256"
        strokeDashoffset="256"
      />
      <circle
        ref={el => circleRefs.current.push(el)}
        cx="50"
        cy="50"
        r="30"
        fill="transparent"
        stroke="#FFF"
        strokeWidth="4"
        strokeDasharray="192 192"
        strokeDashoffset="192"
      />
      <circle
        ref={el => circleRefs.current.push(el)}
        cx="50"
        cy="50"
        r="20"
        fill="transparent"
        stroke="#61DAFB"
        strokeWidth="4"
        strokeDasharray="128 128"
        strokeDashoffset="128"
      />
    </svg>
  );
};

export default ReactLogoAnimation;
