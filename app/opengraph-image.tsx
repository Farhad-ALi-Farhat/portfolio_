import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | ${profile.title}`;
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
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#a1a1aa" }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#a1a1aa" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}