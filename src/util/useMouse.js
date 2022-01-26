import { useState, useEffect } from "react";

export default function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
  });

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
        movementX: e.movementX,
        movementY: e.movementY,
      });
    }

    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });

  return mousePosition;
}
