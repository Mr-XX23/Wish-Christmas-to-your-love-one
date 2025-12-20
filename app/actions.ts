'use server'

import { saveCard, CardData } from '@/lib/db';
import { redirect } from 'next/navigation';

function generateSlug() {
    return Math.random().toString(36).substring(2, 8);
}

export async function createCardAction(formData: FormData) {
    const to = formData.get('toName') as string;
    const from = formData.get('fromName') as string;
    const message = formData.get('message') as string;
    const theme = formData.get('theme') as string;

    if (!message || !theme) {
        throw new Error('Message and Theme are required');
    }

    const slug = generateSlug();
    const card: CardData = {
        id: crypto.randomUUID(),
        slug,
        to: to || '',
        from: from || '',
        message,
        theme,
        createdAt: new Date().toISOString(),
    };

    await saveCard(card);
    return { success: true, slug };
}
