import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lakshya Dewangan — Full-Stack Developer & AI Engineering Explorer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#fffdf5", // --dp-color-ground
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background Decorative Geometric Shapes (Playful Geometric) */}
        {/* Large violet arch backing */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            backgroundColor: "#ffd05b", // Warm Sun
            border: "4px solid #252b3a",
            boxShadow: "8px 8px 0px #252b3a",
            opacity: 0.85,
          }}
        />

        {/* Playful Pink Square */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "120px",
            width: "180px",
            height: "180px",
            borderRadius: "24px",
            backgroundColor: "#ff78c5", // Pink
            border: "4px solid #252b3a",
            boxShadow: "8px 8px 0px #252b3a",
            transform: "rotate(15deg)",
          }}
        />

        {/* Mint circle */}
        <div
          style={{
            position: "absolute",
            top: "180px",
            right: "320px",
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            backgroundColor: "#9bf1cd", // Mint
            border: "4px solid #252b3a",
            boxShadow: "6px 6px 0px #252b3a",
          }}
        />

        {/* Header Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              backgroundColor: "#6434df", // Accent violet
              border: "3px solid #252b3a",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
              boxShadow: "4px 4px 0px #252b3a",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              backgroundColor: "#9bf1cd", // Mint
              border: "3px solid #252b3a",
              color: "#253044",
              fontSize: "18px",
              fontWeight: 700,
              boxShadow: "4px 4px 0px #252b3a",
            }}
          >
            3rd Year BTech CSE • IIIT Naya Raipur (2024–28)
          </div>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "850px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "66px",
              fontWeight: 900,
              color: "#253044", // --dp-color-ink
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Lakshya Dewangan.
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#253044",
              lineHeight: 1.35,
              opacity: 0.9,
            }}
          >
            Full-Stack Developer building for the web &amp; exploring AI Engineering.
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 28px",
            backgroundColor: "#ffffff",
            border: "3px solid #252b3a",
            borderRadius: "17px",
            boxShadow: "6px 6px 0px #252b3a",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#253044",
            }}
          >
            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>LLMs &amp; RAG</span>
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              color: "#6434df",
            }}
          >
            github.com/Lakshya787
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

