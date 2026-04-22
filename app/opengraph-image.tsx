import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-120px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(61,91,255,0.6) 0%, rgba(10,10,11,0) 70%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            color: "#a0a0a6",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          <span style={{ color: "#3d5bff" }}>eh.</span>
          <span
            style={{
              width: "28px",
              height: "1px",
              background: "#a0a0a6",
            }}
          />
          <span>ethanharianto.com</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "24px",
              fontSize: "108px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#fafaf7",
              maxWidth: "1000px",
            }}
          >
            <span>Founding engineer,</span>
            <span style={{ color: "#3d5bff", fontStyle: "italic" }}>
              shipping the whole product.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#a0a0a6",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Ethan Harianto — Pear Prime &apos;26 · Stanford MS &amp; BS CS &apos;26.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "16px",
            color: "#6b6b72",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          <span>Portfolio · 2026</span>
          <span>San Francisco Bay Area</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
