import { ImageResponse } from "next/og";

import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return getCaseStudies().map((s) => ({
    id: s.slug,
    alt: s.frontmatter.title,
    size,
    contentType,
  }));
}

export default async function CaseStudyOG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return new Response("Not found", { status: 404 });
  }
  const { title, description, role, year, stack } = study.frontmatter;

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
            bottom: "-240px",
            left: "-160px",
            width: "720px",
            height: "720px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(61,91,255,0.5) 0%, rgba(10,10,11,0) 70%)",
            filter: "blur(50px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "18px",
            color: "#a0a0a6",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#3d5bff" }}>eh.</span>
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#a0a0a6",
              }}
            />
            <span>Case study</span>
          </div>
          <span>{year}</span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "96px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.96,
              color: "#fafaf7",
              maxWidth: "1040px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#a0a0a6",
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            {description}
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
          <span>{role}</span>
          <span>{stack.slice(0, 4).join(" · ")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
