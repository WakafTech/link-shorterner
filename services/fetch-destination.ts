import { Supabase } from "../external-api/supabase";

export const fetchDestination = async (path: string) => {
    const { data, error } = await Supabase.getDestination(path)

    if (!data?.destination || error) {
        return null
    }

    return data.destination;
}