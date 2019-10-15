import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMousePosition(e) {
    console.log(e);
    setX(e.offsetX);
    setY(e.offsetY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return {
      // document.re
    };
  }, []);
  return (
    <div>
      <div>{x}</div>
      <div>{y}</div>
    </div>
  );
}

export default HookMouse;
