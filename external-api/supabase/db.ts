import {PostgrestSingleResponse} from "@supabase/supabase-js";
import {supabaseClient} from "@supabase/auth-helpers-nextjs";
import {PostgrestFilterBuilder} from "@supabase/postgrest-js";
import {User} from "../../types/user";
import {ShortLink} from "../../types/short-link";

export enum Table {
  Users = "users",
  ShortLinks = "short-links"
}

interface QueryGet<Type, Key extends keyof Type> {
  table: Table;
  paramsKey: Key;
  paramsValue: Type[Key];
}

interface QueryInsert<Type> {
  table: Table,
  payload: Type
}


/* -------------------------------------------------- */
/*                 Generic Queries                    */
/* -------------------------------------------------- */

const getSingle = async <Type, Key extends keyof Type>(query: QueryGet<Type, Key>)
  : Promise<PostgrestSingleResponse<Type>> => {
  const {table, paramsKey, paramsValue} = query
  return supabaseClient
    .from<Type>(table)
    .select("*")
    .eq(paramsKey, paramsValue)
    .limit(1)
    .single()
}

const getAll = async <Type, Key extends keyof Type>(query: QueryGet<Type, Key>)
  : Promise<PostgrestFilterBuilder<Type>> => {
  const {table, paramsKey, paramsValue} = query
  return supabaseClient
    .from<Type>(table)
    .select("*")
    .eq(paramsKey, paramsValue);
}

const insert = async <Type>(query: QueryInsert<Type>)
  : Promise<PostgrestFilterBuilder<Type>> => {
  const {table, payload} = query
  return supabaseClient
    .from<Type>(table)
    .insert(payload)
}


/* --------------------------------------------- */
/*                 Get Queries                   */
/* --------------------------------------------- */

const getSingleUser = async (email: string) => {
  return await getSingle<User, "email">({
    table: Table.Users,
    paramsKey: "email",
    paramsValue: email
  })
}

const getSingleShortLink = async (path: string) => {
  return await getSingle<ShortLink, "path">({
    table: Table.ShortLinks,
    paramsKey: "path",
    paramsValue: path
  })
}

/* ---------------------------------- */
/*              Db Utils              */
/* ---------------------------------- */

export const Db = {
  getSingleUser,
  getSingleShortLink,
};

