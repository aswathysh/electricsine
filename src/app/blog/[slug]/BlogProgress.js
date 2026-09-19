"use client";

import { useEffect, useRef } from "react";

export default function BlogProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const documentElement = document.documentElement;

      const scrollableHeight =
        documentElement.scrollHeight -
        documentElement.clientHeight;

      const percentage =
        scrollableHeight > 0
          ? (documentElement.scrollTop /
              scrollableHeight) *
            100
          : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(
          percentage,
          100
        )}%`;
      }
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  return (
    <div
      className="es-progress"
      ref={progressRef}
      style={{ width: "0%" }}
    />
  );
}
