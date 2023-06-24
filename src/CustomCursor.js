import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const handleMouseEnter = () => {
      document.documentElement.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      document.documentElement.style.cursor = "default";
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor${isClicked ? " pulsing" : ""}`}
      style={{
        position: "fixed",
        top: cursorPosition.y - 15,
        left: cursorPosition.x - 15,
        cursor: "none",
        backgroundColor: "#7743fa", // Replace with your desired circle color
        opacity: "70%",
        borderRadius: "50%",
        width: "30px", // Adjust the width and height to match your cursor size
        height: "30px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
      onClick={handleClick}
    />
  );
};

export default CustomCursor;
