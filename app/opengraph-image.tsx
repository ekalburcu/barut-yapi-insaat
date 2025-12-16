import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Barut Yapı İnşaat";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(224, 20%, 8%)",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(40, 15%, 55%) 0, hsl(40, 15%, 55%) 2px, transparent 2px, transparent 10px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontFamily: "serif",
              fontWeight: 500,
              color: "hsl(40, 15%, 55%)",
              letterSpacing: "-0.02em",
            }}
          >
            Barut Yapı İnşaat
          </div>
          <div
            style={{
              fontSize: 40,
              color: "hsl(210, 40%, 70%)",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            30+ Yıllık Deneyim ile Türkiye'nin İnşaat Lideri
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
