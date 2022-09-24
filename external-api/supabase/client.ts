import { createClient } from "@supabase/supabase-js";
import { clientConfig } from "../../config/app-config";

export const supabase = createClient(clientConfig.supabaseUrl, clientConfig.supabaseAnonKey);