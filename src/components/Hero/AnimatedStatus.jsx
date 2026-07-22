import { useEffect, useState, useRef } from "react";

import "./AnimatedStatus.css";

const statuses = [
  "Available for Opportunities",
  "Immediate Joiner",
  "React Frontend Engineer",
  "Open to Full-time Roles",
];

function AnimatedStatus() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  const TYPING_SPEED = 20;
  const DELETING_SPEED = 20;
  const PAUSE_AFTER_COMPLETE = 1000;

  useEffect(() => {
    mounted.current = true;

    const handle = () => {
      const fullText = statuses[index];

      if (!isDeleting && text.length < fullText.length) {
        // type next char
        setTimeout(() => {
          if (!mounted.current) return;
          setText(fullText.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else if (!isDeleting && text.length === fullText.length) {
        // pause then start deleting
        setTimeout(() => {
          if (!mounted.current) return;
          setIsDeleting(true);
        }, PAUSE_AFTER_COMPLETE);
      } else if (isDeleting && text.length > 0) {
        setTimeout(() => {
          if (!mounted.current) return;
          setText(fullText.slice(0, text.length - 1));
        }, DELETING_SPEED);
      } else if (isDeleting && text.length === 0) {
        // move to next
        setIsDeleting(false);
        setIndex((i) => (i + 1) % statuses.length);
      }
    };

    const timer = setTimeout(handle, 0);

    return () => {
      mounted.current = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, index]);

  return (
    <div className="hero-status" aria-live="polite" aria-atomic="true">
      <span className="status-dot" />

      <div className="status-text" style={{ width: "var(--status-width)" }}>
        <span className="typed-text">{text}</span>
      </div>
    </div>
  );
}

export default AnimatedStatus;
