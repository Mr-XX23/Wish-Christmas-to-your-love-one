import { supabase } from './supabase';

export interface CardData {
    id: string;
    slug: string;
    to: string;
    from: string;
    message: string;
    theme: string;
    createdAt: string;
}

export async function saveCard(card: CardData): Promise<void> {
    // If Supabase vars are missing, this might throw or fail. 
    // We assume the user has set them up as requested.

    const { error } = await supabase
        .from('cards')
        .insert({
            id: card.id, // We can let Supabase generate this, but we generate it in actions.ts currently. We'll use ours.
            slug: card.slug,
            to_name: card.to,
            from_name: card.from,
            message: card.message,
            theme: card.theme,
            created_at: card.createdAt,
        });

    if (error) {
        console.error("Supabase Save Error:", error);
        throw new Error(`Failed to save card: ${error.message}`);
    }
}

export async function getCardBySlug(slug: string): Promise<CardData | null> {
    const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        // If code is PGRST116, it means no rows found (not exactly an error in valid flow)
        if (error.code !== 'PGRST116') {
            console.error("Supabase Fetch Error:", error);
        }
        return null;
    }

    if (!data) return null;

    return {
        id: data.id,
        slug: data.slug,
        to: data.to_name,
        from: data.from_name,
        message: data.message,
        theme: data.theme,
        createdAt: data.created_at,
    };
}
