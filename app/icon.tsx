import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0d0f",
          color: "#faf3dd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 600,
          fontSize: 34,
          letterSpacing: "-0.04em",
          borderRadius: 14,
        }}
      >
        <span>eh</span>
        <span style={{ color: "#00b4d8" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
