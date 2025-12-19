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

  const themeColors: Record<string, string> = {
    classic: '#D42426',
    snow: '#0f172a',
    gold: '#F4D35E',
    modern: '#10b981',
  };

  const color = card ? themeColors[card.theme] || '#D42426' : '#D42426';
  const message = card?.message || "Merry Christmas!";
  const from = card?.from || "A Friend";

  return new ImageResponse(
    (
      <div
        style={{
          background: color,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
          textAlign: 'center',
          border: '20px solid rgba(255,255,255,0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 60, marginBottom: 20 }}>
          🎄 Merry Christmas 🎄
        </div>
        <div style={{ fontSize: 40, padding: '0 40px', lineHeight: 1.4, maxWidth: '80%' }}>
          "{message.length > 50 ? message.substring(0, 50) + '...' : message}"
        </div>
        <div style={{ fontSize: 32, marginTop: 40, opacity: 0.8 }}>
          — From {from}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
