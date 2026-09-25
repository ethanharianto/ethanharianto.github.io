import { ImageResponse } from "next/og";

import { site } from "@/lib/site";
import { ogLines } from "@/lib/copy";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#faf3dd";
const MUTED = "#c9c3b4";
const SUBTLE = "#92817a";
const ACCENT = "#00b4d8";

export default async function OGImage() {
  const lines = ogLines();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0d0f",
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
            top: "-220px",
            right: "-140px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}33 0%, rgba(11,13,15,0) 70%)`,
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
            color: MUTED,
          }}
        >
          <span style={{ color: ACCENT }}>eh.</span>
          <span style={{ width: "28px", height: "1px", background: MUTED }} />
          <span>ethanharianto.com</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: lines.length > 2 ? "76px" : "104px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              color: INK,
              maxWidth: "1000px",
            }}
          >
            {lines.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: MUTED,
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
            color: SUBTLE,
          }}
        >
          <span>{site.location}</span>
          <span>2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
