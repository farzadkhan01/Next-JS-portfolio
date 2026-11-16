import { ImageResponse } from "next/og";

// 180×180 PNG touch icon (iOS home screen, manifest), matching icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171717",
          color: "#f7f7f5",
          fontSize: 78,
          letterSpacing: -2,
        }}
      >
        FK
      </div>
    ),
    size,
  );
}
