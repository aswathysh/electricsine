"use client";

import { useEffect, useRef } from "react";

export default function ExamProgress() {
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
        const progress = Math.max(0, Math.min(100, Math.round(percentage)));
        const previousClasses = Array.from(progressRef.current.classList).filter(
          (name) => name.startsWith("ims-progress-width-"),
        );
        progressRef.current.classList.remove(...previousClasses);
        progressRef.current.classList.add(`ims-progress-width-${progress}`);
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
      className={["es-progress", "ims-src-app-exam-slug-ExamProgress-js-0001"].filter(Boolean).join(" ")}
      ref={progressRef}

    />
  );
}
