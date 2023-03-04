import React, { useState, useEffect } from "react";

function MyComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQueryList.matches);

    const listener = (event) => {
      setIsMobile(event.matches);
    };
    mediaQueryList.addListener(listener);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return (
    <div>
      <h1>
        {isMobile
          ? "Este es el componente para mobile"
          : "Este es el componente para desktop"}
      </h1>
    </div>
  );
}

export default MyComponent;
