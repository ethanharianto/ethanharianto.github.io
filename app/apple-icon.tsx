import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          color: "#fafaf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 600,
          fontSize: 96,
          letterSpacing: "-0.04em",
        }}
      >
        <span>eh</span>
        <span style={{ color: "#3d5bff" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
