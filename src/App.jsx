import { useState } from "react";

function randHex() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

export default function App() {
  const [colors, setColors] = useState(() =>
    Array.from({ length: 5 }, randHex)
  );

  function shuffle() {
    setColors(Array.from({ length: 5 }, randHex));
  }

  return (
    <div style={s.app}>
      <h1>Palette</h1>
      <div style={s.grid}>
        {colors.map((c, i) => (
          <div key={i} style={{ ...s.card, background: c }}>
            <span style={{ ...s.tag, color: "#000" }}>{c}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span>5 random colors</span>
        <button onClick={shuffle} style={s.btn}>
          Shuffle
        </button>
      </div>
    </div>
  );
}

const s = {
  app: { maxWidth: 900, margin: "40px auto", fontFamily: "system-ui" },
  grid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 },
  card: {
    height: 140,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
  },
  tag: {
    background: "rgba(255,255,255,0.85)",
    padding: "6px 10px",
    borderRadius: 8,
    fontWeight: 600,
  },
};
