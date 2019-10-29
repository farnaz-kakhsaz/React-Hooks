import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMousePosition(e) {
    setX(e.offsetX);
    setY(e.offsetY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition)
    }
  }, []);
  return (
    <div>
      <div>{x}</div>
      <div>{y}</div>
    </div>
  );
}

export default HookMouse;
