import { useEffect, useState } from "react";

export function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function calculateWindowWidth() {
    // PART 1: THE ACTION (what the effect does)
    const handleResize = () => {
      console.log("Window resized!");
      setWindowWidth(window.innerWidth);
    };

    // We reach outside React to touch the browser's DOM API
    window.addEventListener("resize", handleResize);

    // PART 3: THE CLEANUP FUNCTION
    // If this component is removed from the screen, we MUST remove the listener.
    // Otherwise, we create a massive memory leak.
    return () => {
      console.log("Cleaning up the listener!");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // PART 2: THE DEPENDENCY ARRAY (The Triggers)

  return <div className="text-xl font-bold">Window Width: {windowWidth}px</div>;
}
