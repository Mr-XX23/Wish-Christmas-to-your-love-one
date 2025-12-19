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

  return {
    title: `A Christmas Greeting for ${card.to || 'You'}!`,
    description: `You've received a magical Christmas card from ${card.from || 'a friend'}. Open it inside!`,
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
