import { NextRequest, NextResponse } from 'next/server';
import { getCardBySlug } from '@/lib/db';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const card = await getCardBySlug(slug);

    if (!card) {
        return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }

    return NextResponse.json(card);
}
