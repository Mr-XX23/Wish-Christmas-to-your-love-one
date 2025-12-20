import { getCardBySlug } from "@/lib/db";
import { CardViewer } from "@/components/features/card-viewer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = await getCardBySlug(slug);
  if (!card) return { title: "Card Not Found" };

  const title = `🎁 ${card.from || 'A friend'} sent you a magical Christmas surprise. Open it now!`;
  const description = `You've received a beautiful, interactive holiday greeting from ${card.from || 'a friend'}. Experience the magic of Christmas with 3D unboxing, festive music, and snowy animations!`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://wish-christmas-to-your-love-one.vercel.app/${slug}`,
      images: [
        {
          url: `https://wish-christmas-to-your-love-one.vercel.app/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Merry Christmas!",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  }
}

export default async function CardPage({ params }: PageProps) {
  const { slug } = await params;
  const card = await getCardBySlug(slug);

  if (!card) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black overflow-hidden flex items-center justify-center p-4">
      <CardViewer card={card} />
    </main>
  );
}
