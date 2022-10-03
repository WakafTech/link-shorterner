export const clientConfig = {
    app: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL!
    },
    supabase: {
        baseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    }
}