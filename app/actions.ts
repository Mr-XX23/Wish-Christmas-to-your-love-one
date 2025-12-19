'use server'

import { saveCard, CardData } from '@/lib/db';
import { redirect } from 'next/navigation';

function generateSlug() {
    return Math.random().toString(36).substring(2, 8);
}

export async function createCardAction(formData: FormData) {
    const to = formData.get('to') as string;
    const from = formData.get('from') as string;
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

    // Return the slug so client can redirect or show success
    // For now, let's redirect on server or return data?
    // User flow: "Generate unique link... Show share actions".
    // Better to return the slug to the client so they can show the modal.
    return { success: true, slug };
}
