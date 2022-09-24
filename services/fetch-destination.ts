import { Db } from "../external-api/supabase/db";

export const fetchDestination = async (path: string) => {
    return await Db.getDestination(path)
}