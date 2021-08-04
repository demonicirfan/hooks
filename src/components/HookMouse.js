import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX); //The clientX property returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered.
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);
  },[]);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
