import { ImageResponse } from 'next/og';
import { getCardBySlug } from '@/lib/db';

export const runtime = 'nodejs';

export const alt = 'Merry Christmas!';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = await getCardBySlug(slug);

  const siteUrl = "https://wish-christmas-to-your-love-one.vercel.app";
  const santaImageUrl = `${siteUrl}/santa-og.png`;
  const from = card?.from || "A Friend";

  const isNewYear = card?.theme?.startsWith("newyear_");
  const greeting = isNewYear ? "Happy New Year" : "Merry Christmas";
  const year = isNewYear ? "2026" : "";
  const highlightColor = isNewYear ? "#FBBF24" : "#D42426"; // Amber vs Red

  return new ImageResponse(
    (
      <div
        style={{
          background: isNewYear ? '#0f172a' : 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Background Gradient/Vignette */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '100%',
          background: isNewYear ? 'linear-gradient(to right, #1e1b4b, transparent)' : 'linear-gradient(to right, #f8f9fa, transparent)',
          opacity: 0.8,
        }} />

        {/* Left Side: Image or Graphic */}
        <div style={{
          display: 'flex',
          width: '400px',
          height: '450px',
          background: isNewYear ? '#1e1b4b' : '#f3f4f6',
          borderRadius: '32px',
          overflow: 'hidden',
          transform: 'rotate(-5deg)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          border: '8px solid white',
          marginRight: '60px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {isNewYear ? (
            <div style={{ fontSize: '100px', fontWeight: 'bold', color: '#FBBF24' }}>2026</div>
          ) : (
            <img
              src={santaImageUrl}
              width="400"
              height="450"
              style={{ objectFit: 'cover' }}
              alt="Santa"
            />
          )}
        </div>

        {/* Right Side: Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          {/* Domain Badge */}
          <div style={{
            background: isNewYear ? 'rgba(255,255,255,0.1)' : '#f3f4f6',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '20px',
            color: isNewYear ? '#94a3b8' : '#6b7280',
            alignSelf: 'flex-start',
            marginBottom: '32px',
            fontWeight: '500',
          }}>
            wish-christmas-to-your-love-one.vercel.app
          </div>

          {/* Main Text */}
          <div style={{
            fontSize: '64px',
            fontWeight: '900',
            color: isNewYear ? '#f8fafc' : '#000000',
            lineHeight: '1.2',
            marginBottom: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <span style={{ color: highlightColor }}>{from}</span>
            <span>sent you a</span>
            <span>{greeting}!</span>
          </div>

          {/* Button */}
          <div style={{
            background: isNewYear ? '#FBBF24' : 'black',
            color: isNewYear ? 'black' : 'white',
            padding: '16px 40px',
            borderRadius: '40px',
            fontSize: '28px',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          }}>
            Open Now
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

