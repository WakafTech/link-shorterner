import { supabase } from "./client";

const getDestination = async (path: string): Promise<string | null> => {
    const { data, error } = await supabase
      .from("short-links")
      .select("destination")
      .eq("path", path)
      .limit(1)
      .single();
    
    if(!data || error) {
        return null
    }

    return data.destination;
  };
  
  export const Db = {
    getDestination,
  };
  