import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Problem Solving",     value: 92, display: "ELITE" },
  { label: "System Design",       value: 80, display: "ADVANCED" },
  { label: "Backend Architecture",value: 88, display: "ADVANCED" },
  { label: "Frontend Dev",        value: 78, display: "STRONG" },
  { label: "Deployment / DevOps", value: 72, display: "SOLID" },
  { label: "Data Structures",     value: 85, display: "ADVANCED" },
];

export default function TaleOfTheTape() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tape-container" ref={ref}>
      {stats.map((s, i) => (
        <div className="tape-row" key={s.label}>
          <div className="tape-header">
            <span className="tape-label">{s.label}</span>
            <span className="tape-value">{s.display}</span>
          </div>
          <div className="tape-track">
            <div
              className={`tape-fill${triggered ? " tape-fill--active" : ""}`}
              style={{
                "--fill-width": `${s.value}%`,
                transitionDelay: triggered ? `${i * 0.12}s` : "0s"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}