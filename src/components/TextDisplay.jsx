import { useEffect, useRef, useCallback } from "react";
import CHAR_STATE from "../constants/charState";
import {
  textAreaStyle,
  charStyle,
  charCorrectStyle,
  charWrongStyle,
  charReviewStyle,
  modeHintStyle,
  modeHintTitleStyle,
  modeHintSubStyle,
  startHintStyle,
} from "../styles/appStyles";

export default function TextDisplay({ mode, story, charStates, cursor, started }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  const idleTimer = useRef(null);

  // Smoothly position the vertical caret and auto-scroll
  const updateCursor = useCallback(() => {
    const container = textRef.current;
    const cursorEl = cursorRef.current;
    if (!container || !cursorEl) return;

    const charEl = container.querySelector(`[data-idx="${cursor}"]`);
    if (!charEl) return;

    const containerRect = container.getBoundingClientRect();
    const charRect = charEl.getBoundingClientRect();

    // Vertical bar sits at the LEFT edge of the current character
    const left = charRect.left - containerRect.left + container.scrollLeft;
    const top = charRect.top - containerRect.top + container.scrollTop;
    const height = charRect.height;

    cursorEl.style.transform = `translate(${left}px, ${top}px)`;
    cursorEl.style.height = `${height}px`;

    // Remove idle blink while typing, re-add after 0.5s pause
    cursorEl.classList.remove("idle");
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      cursorEl.classList.add("idle");
    }, 500);

    // Vertical auto-scroll: keep the current line roughly centred
    const charTopInContainer = charRect.top - containerRect.top;
    const visibleHeight = container.clientHeight;
    if (charTopInContainer < 0 || charTopInContainer > visibleHeight - charRect.height) {
      container.scrollTo({
        top: top - visibleHeight / 2 + charRect.height / 2,
        behavior: "smooth",
      });
    }
  }, [cursor]);

  useEffect(() => {
    updateCursor();
  }, [cursor, updateCursor]);

  // Reposition on window resize / font load
  useEffect(() => {
    window.addEventListener("resize", updateCursor);
    return () => window.removeEventListener("resize", updateCursor);
  }, [updateCursor]);

  return (
    <>
      {!started && <div style={startHintStyle}>start typing to begin</div>}

      <div ref={textRef} style={textAreaStyle}>
        {/* Floating smooth cursor */}
        <div ref={cursorRef} className="smooth-cursor" />

        {story.split("").map((char, i) => {
          const state = charStates[i];
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              data-idx={i}
              style={{
                ...charStyle,
                ...(state === CHAR_STATE.CORRECT ? charCorrectStyle : {}),
                ...(state === CHAR_STATE.WRONG ? charWrongStyle : {}),
                ...(state === CHAR_STATE.REVIEW ? charReviewStyle : {}),
                ...(isCursor ? { color: "#e5e5e5" } : {}),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </>
  );
}
