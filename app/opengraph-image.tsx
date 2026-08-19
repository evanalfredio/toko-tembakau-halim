import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#170f09",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, #3a2314 0%, #170f09 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{ width: 64, height: 1, backgroundColor: "#b8935a" }} />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#b8935a",
            }}
          />
          <div style={{ width: 64, height: 1, backgroundColor: "#b8935a" }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 160,
            color: "#d4af6a",
            fontFamily: "serif",
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          H
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 64, height: 1, backgroundColor: "#b8935a" }} />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#b8935a",
            }}
          />
          <div style={{ width: 64, height: 1, backgroundColor: "#b8935a" }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontFamily: "serif",
            color: "#f6efdf",
            letterSpacing: -1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#ddcca4",
            marginTop: 16,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
