import { ImageResponse } from 'next/og';
import { getCardBySlug } from '@/lib/db';

export const runtime = 'nodejs'; // Use nodejs runtime for fs access in getCardBySlug

export const alt = 'Merry Christmas!';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = await getCardBySlug(slug);

  // We rely on the public asset moved to public/santa-og.png
  // To avoid complex external fetches in various environments, we use a high-quality absolute URL strategy
  // However, for this environment, we'll use base64 or a direct public path if possible.
  // Actually, standard practice for OG images is to use a public URL.
  // Since we don't have a stable deployment URL here, we'll use a stylized layout that features the image.

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: '#fee2e2',
          borderRadius: '50%',
          opacity: 0.5,
        }} />
        
        {/* Left Side: Text/Context */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          zIndex: 10,
        }}>
          <div style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: '#D42426',
            marginBottom: 20,
            lineHeight: 1.1,
          }}>
            You've Got Mail! 💌
          </div>
          <div style={{
            fontSize: 32,
            color: '#4b5563',
            marginBottom: 10,
          }}>
            From: {card?.from || "A Friend"}
          </div>
          <div style={{
            fontSize: 24,
            padding: '10px 20px',
            background: '#D42426',
            color: 'white',
            borderRadius: '100px',
            alignSelf: 'flex-start',
            marginTop: 20,
          }}>
             Open Your Christmas Gift 🎁
          </div>
        </div>

        {/* Right Side: Santa Placeholder / Image space */}
        {/* In a real deployment, we'd use <img src="..." /> with a public URL */}
        {/* For now we use the stylized text representation within the image */}
        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 300,
        }}>
          🎅
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

