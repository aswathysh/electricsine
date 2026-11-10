"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogProgress() {
  const progressRef = useRef(null);
  const promoDialogRef = useRef(null);
  const [showCoursePromo, setShowCoursePromo] = useState(false);

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

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowCoursePromo(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showCoursePromo) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowCoursePromo(false);

      if (event.key === "Tab") {
        const focusableElements =
          promoDialogRef.current?.querySelectorAll('a[href], button:not([disabled])');
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const focusIsOutsideDialog =
          !promoDialogRef.current.contains(document.activeElement);

        if (
          (event.shiftKey &&
            (document.activeElement === firstElement || focusIsOutsideDialog)) ||
          (!event.shiftKey &&
            (document.activeElement === lastElement || focusIsOutsideDialog))
        ) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement).focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    promoDialogRef.current?.querySelector("button")?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [showCoursePromo]);

  return (
    <>
      <div
        className={["es-progress", "ims-src-app-blog-slug-BlogProgress-js-0001"].filter(Boolean).join(" ")}
        ref={progressRef}

      />
      {showCoursePromo && (
        <div
          className="es-course-promo-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowCoursePromo(false);
            }
          }}
        >
          <section
            ref={promoDialogRef}
            className="es-course-promo"
            role="dialog"
            aria-modal="true"
            aria-labelledby="es-course-promo-title"
            aria-describedby="es-course-promo-description"
          >
            <button
              className="es-course-promo__close"
              type="button"
              aria-label="Close course promotion"
              onClick={() => setShowCoursePromo(false)}
            >
              &times;
            </button>
            <div className="es-course-promo__art" aria-hidden="true">
              <span className="es-course-promo__bolt">⚡</span>
              <span className="es-course-promo__badge">FREE TO TRY</span>
              <span className="es-course-promo__orbit es-course-promo__orbit--one" />
              <span className="es-course-promo__orbit es-course-promo__orbit--two" />
            </div>
            <p className="es-course-promo__eyebrow">Take the next step</p>
            <h2 id="es-course-promo-title">
              Try our latest exams for free
            </h2>
            <p
              id="es-course-promo-description"
              className="es-course-promo__description"
            >
              Put what you&apos;ve learned to the test with practice exams and
              engineering courses made for your goals.
            </p>
            <a className="es-course-promo__cta" href="/courses">
              Explore courses <span aria-hidden="true">→</span>
            </a>
            <button
              className="es-course-promo__later"
              type="button"
              onClick={() => setShowCoursePromo(false)}
            >
              Maybe later
            </button>
          </section>
        </div>
      )}
    </>
  );
}
