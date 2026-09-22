import { ImageResponse } from "next/og";
import { site } from "@/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080a09",
          color: "#ece7dc",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9a56a",
          }}
        >
          CKC DEVELOPMENT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Software you own. Infrastructure you keep.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#9aa198",
              maxWidth: 760,
            }}
          >
            Custom software, plus IT infrastructure designed for in-house
            ownership.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#c9a56a" }}>{site.domain}</div>
      </div>
    ),
    size,
  );
}
