import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/ckc-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#050507",
          color: "#f3f3f8",
          padding: "56px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#3ee0ff",
            }}
          >
            COOL KIDS CLUB
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Software you own. Infrastructure you keep.
          </div>
          <div style={{ marginTop: 24, fontSize: 24, color: "#9a9ab0" }}>
            Custom software + IT infrastructure for in-house ownership.
          </div>
          <div style={{ marginTop: 36, fontSize: 20, color: "#ff4ec8" }}>
            {site.domain}
          </div>
        </div>
        <img src={logoSrc} width={420} height={420} alt="" />
      </div>
    ),
    size,
  );
}
