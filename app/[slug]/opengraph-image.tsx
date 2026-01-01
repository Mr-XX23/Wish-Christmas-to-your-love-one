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

  const siteUrl = "https://send-wish-to-your-love-one.vercel.app";
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
          background: isNewYear ? '#020617' : 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Sparkles for New Year */}
        {isNewYear && [
          { top: '10%', left: '5%', size: 4 },
          { top: '20%', left: '80%', size: 6 },
          { top: '40%', left: '15%', size: 3 },
          { top: '60%', left: '90%', size: 5 },
          { top: '80%', left: '25%', size: 4 },
          { top: '15%', left: '40%', size: 3 },
          { top: '75%', left: '60%', size: 5 },
        ].map((sparkle, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: sparkle.top,
              left: sparkle.left,
              width: sparkle.size,
              height: sparkle.size,
              background: '#FBBF24',
              borderRadius: '50%',
              boxShadow: '0 0 10px #FBBF24, 0 0 20px #FBBF24',
              opacity: 0.6,
            }}
          />
        ))}

        {/* Subtle Background Gradient/Vignette */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '100%',
          background: isNewYear ? 'linear-gradient(to right, #1e1b4b, transparent)' : 'linear-gradient(to right, #f8f9fa, transparent)',
          opacity: 0.6,
        }} />

        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '600px',
          height: '100%',
          background: isNewYear ? 'radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.1), transparent 70%)' : 'none',
        }} />

        {/* Left Side: Image or Graphic */}
        <div style={{
          display: 'flex',
          width: '400px',
          height: '450px',
          background: isNewYear ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' : '#f3f4f6',
          borderRadius: '32px',
          overflow: 'hidden',
          transform: 'rotate(-5deg)',
          boxShadow: isNewYear ? '0 25px 50px -12px rgba(251, 191, 36, 0.2)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          border: isNewYear ? '6px solid #FBBF24' : '8px solid white',
          marginRight: '60px',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {isNewYear ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '100px', fontWeight: 'bold', color: '#FBBF24', textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}>2026</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginTop: '-10px', textTransform: 'uppercase', letterSpacing: '4px' }}>New Year</div>
            </div>
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
          zIndex: 10,
        }}>
          {/* Domain Badge */}
          <div style={{
            background: isNewYear ? 'rgba(251,191,36,0.1)' : '#f3f4f6',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '18px',
            color: isNewYear ? '#FBBF24' : '#6b7280',
            alignSelf: 'flex-start',
            marginBottom: '32px',
            fontWeight: '600',
            border: isNewYear ? '1px solid rgba(251,191,36,0.2)' : 'none',
          }}>
            wish-holiday.app
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
            <span style={{ fontSize: '48px', opacity: 0.9 }}>sent you a</span>
            <span>{greeting}!</span>
          </div>

          {/* Button */}
          <div style={{
            background: isNewYear ? 'linear-gradient(to right, #FBBF24, #F59E0B)' : 'black',
            color: isNewYear ? '#000' : 'white',
            padding: '16px 48px',
            borderRadius: '40px',
            fontSize: '28px',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            boxShadow: '0 10px 25px -5px rgba(251, 191, 36, 0.4)',
            display: 'flex',
            alignItems: 'center',
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

