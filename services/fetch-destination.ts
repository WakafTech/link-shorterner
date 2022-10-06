import { Db } from "../external-api/supabase/db";

export const fetchDestination = async (path: string) => {
    const {body} = await Db.getSingleShortLink(path)
    if (body) {
        return body.destination
    }
    return null
}
