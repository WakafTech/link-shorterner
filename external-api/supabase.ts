import { createClient } from "@supabase/supabase-js";
import { appConfig } from "../config/app-config";

const supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);

const getDestination = async (path: string) => {
  let { data, error } = await supabase
    .from("short-links")
    .select("destination")
    .eq("path", path)
    .limit(1)
    .single();

  return {
    data,
    error,
  };
};

export const Supabase = {
  getDestination,
};
