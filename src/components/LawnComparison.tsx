import { useEffect, useRef, useState } from "react";

export function LawnComparison() {
  const [position, setPosition] = useState(50);
  const [vertical, setVertical] = useState(false);
  const [moving, setMoving] = useState(false);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (stopTimer.current) clearTimeout(stopTimer.current);
    },
    [],
  );

  function move(value: number) {
    setPosition(value);
    setMoving(true);
    if (stopTimer.current) clearTimeout(stopTimer.current);
    stopTimer.current = setTimeout(() => setMoving(false), 500);
  }

  return (
    <section
      id="comparison"
      className="comparison section wrap"
      aria-labelledby="comparison-title"
    >
      <div className="section-intro">
        <h2 id="comparison-title">
          A fresh cut.
          <br />A whole new outlook.
        </h2>
        <p>
          Slide the mower to compare. A fresh perspective is one swipe away.
        </p>
      </div>
      <div className="comparison-controls">
        <p className="comparison-preview">
          Sample photos of different properties · Not a real before-and-after.
        </p>
        <button
          className="text-link"
          type="button"
          onClick={() => setVertical(!vertical)}
        >
          {vertical ? "Swipe left / right" : "Swipe up / down"} ↔
        </button>
      </div>
      <div
        className={`comparison-stage ${vertical ? "is-vertical" : ""} ${moving ? "is-mowing" : ""}`}
      >
        <img
          className="comparison-photo"
          src="/images/landscape.webp"
          alt="Sample starting photo of a landscaped front yard"
          loading="lazy"
        />
        <img
          className="comparison-photo"
          src="/images/lawn.webp"
          alt="Sample comparison photo of a lawn beside cypress trees"
          loading="lazy"
          style={{
            clipPath: vertical
              ? `inset(0 0 ${100 - position}% 0)`
              : `inset(0 ${100 - position}% 0 0)`,
          }}
        />
        <span className="comparison-label comparison-label-after">
          Sample A
        </span>
        <span className="comparison-label comparison-label-before">
          Sample B
        </span>
        <div
          className="comparison-divider"
          style={vertical ? { top: `${position}%` } : { left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="comparison-mower">
            <svg viewBox="0 0 90 100" fill="none">
              <g stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
                <path d="M25 75V93h40V75" />
                <rect
                  x="14"
                  y="20"
                  width="12"
                  height="23"
                  rx="4"
                  fill="var(--forest)"
                />
                <rect
                  x="64"
                  y="20"
                  width="12"
                  height="23"
                  rx="4"
                  fill="var(--forest)"
                />
                <rect
                  x="14"
                  y="58"
                  width="12"
                  height="23"
                  rx="4"
                  fill="var(--forest)"
                />
                <rect
                  x="64"
                  y="58"
                  width="12"
                  height="23"
                  rx="4"
                  fill="var(--forest)"
                />
                <rect
                  x="23"
                  y="15"
                  width="44"
                  height="65"
                  rx="12"
                  fill="var(--gold)"
                />
                <rect
                  x="32"
                  y="32"
                  width="26"
                  height="31"
                  rx="6"
                  fill="var(--forest)"
                />
                <path
                  d="M38 41h14m-14 6h14m-14 6h14"
                  stroke="var(--paper)"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <span className="comparison-grass">
              {Array.from({ length: 20 }, (_, index) => (
                <i
                  key={index}
                  style={{
                    animationDelay: `${index * -0.043}s`,
                    left: `${(index % 4) * 5}px`,
                    top: `${(index % 5) * 5 - 10}px`,
                  }}
                />
              ))}
            </span>
          </span>
          <span className="comparison-arrows">‹ &nbsp; ›</span>
        </div>
        <input
          className="comparison-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => move(Number(event.target.value))}
          aria-label={
            vertical
              ? "Swipe photos up and down"
              : "Swipe photos left and right"
          }
          aria-valuetext={`${position}% of sample A revealed`}
        />
      </div>
      <p className="comparison-hint">
        Drag the mower back and forth with your mouse or finger. Arrow keys work
        too.
      </p>
    </section>
  );
}
