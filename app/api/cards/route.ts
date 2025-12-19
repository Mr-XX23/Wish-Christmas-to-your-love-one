import { NextRequest, NextResponse } from 'next/server';
import { saveCard, CardData } from '@/lib/db';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Basic validation
        if (!body.message || !body.theme) {
            return NextResponse.json({ error: 'Message and Theme are required' }, { status: 400 });
        }

        const slug = Math.random().toString(36).substring(2, 8);

        const card: CardData = {
            id: crypto.randomUUID(),
            slug,
            to: body.to || '',
            from: body.from || '',
            message: body.message,
            theme: body.theme,
            createdAt: new Date().toISOString(),
        };

        await saveCard(card);

        return NextResponse.json({ success: true, slug, card }, { status: 201 });
    } catch (error) {
        console.error('API Create Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
