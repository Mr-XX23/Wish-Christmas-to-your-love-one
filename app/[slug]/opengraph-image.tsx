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

  // Use the absolute URL for the image
  // Since we are on Vercel, we can use the project URL
  const siteUrl = "https://wish-christmas-to-your-love-one.vercel.app";
  const santaImageUrl = `${siteUrl}/santa-og.png`;

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
          padding: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          background: '#fee2e2',
          borderRadius: '50%',
          opacity: 0.6,
        }} />
        
        {/* Left Side: Text/Context */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          zIndex: 10,
        }}>
          <div style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#D42426',
            marginBottom: 20,
            lineHeight: 1.1,
          }}>
            You've Got Mail!
          </div>
          <div style={{
            fontSize: 42,
            color: '#4b5563',
            marginBottom: 20,
          }}>
            From: {card?.from || "A Friend"}
          </div>
          <div style={{
            fontSize: 28,
            padding: '15px 30px',
            background: '#D42426',
            color: 'white',
            borderRadius: '100px',
            alignSelf: 'flex-start',
            marginTop: 40,
            boxShadow: '0 10px 20px rgba(212, 36, 38, 0.2)',
          }}>
             Open Your Surprise Message
          </div>
        </div>

        {/* Right Side: Santa Image */}
        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img 
            src={santaImageUrl} 
            width="500" 
            height="500" 
            style={{ objectFit: 'contain' }}
            alt="Santa Claus"
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

