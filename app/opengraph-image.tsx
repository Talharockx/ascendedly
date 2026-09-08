import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ascendedly | B2B technology and growth agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ecfeff 0%, #ffffff 45%, #fdf4ff 100%)",
          padding: "72px",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#4f46e5",
          }}
        >
          Ascendedly Technologies
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 650, lineHeight: 1.05, maxWidth: 980 }}>
            Enterprise software, SEO, and AI transformation.
          </div>
          <div style={{ fontSize: 28, color: "#64748b", maxWidth: 820 }}>
            Search engine optimization, growth marketing, and production AI, run as one revenue system.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
