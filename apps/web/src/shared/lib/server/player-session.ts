import "server-only";

import { cookies } from "next/headers";
import { createServerSupabaseAdminClient } from "./supabase";

const playerIdPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const PLAYER_SESSION_COOKIE_NAME = "pe_player_session";

export const playerSessionCookieOptions = {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 365,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

function isValidPlayerId(value: string | undefined) {
  return Boolean(value && playerIdPattern.test(value));
}

async function findPlayerById(playerId: string) {
  const supabase = createServerSupabaseAdminClient();
  const { data, error } = await supabase.from("players").select("id").eq("id", playerId).maybeSingle();

  if (error) {
    throw new Error(`Failed to load player session: ${error.message}`);
  }

  return data;
}

async function createPlayer() {
  const supabase = createServerSupabaseAdminClient();
  const { data, error } = await supabase.from("players").insert({}).select("id").single();

  if (error || !data) {
    throw new Error(`Failed to create player session: ${error?.message ?? "unknown error"}`);
  }

  return data;
}

export async function getCurrentPlayerId() {
  try {
    const cookieStore = await cookies();
    const playerId = cookieStore.get(PLAYER_SESSION_COOKIE_NAME)?.value;

    if (!playerId || !isValidPlayerId(playerId)) {
      return null;
    }

    const player = await findPlayerById(playerId);

    return player?.id ?? null;
  } catch (error) {
    console.error("Failed to resolve current player session.", error);
    throw new Error("Failed to resolve current player session.");
  }
}

export async function ensurePlayerSession() {
  const cookieStore = await cookies();
  const existingPlayerId = cookieStore.get(PLAYER_SESSION_COOKIE_NAME)?.value;

  if (existingPlayerId && isValidPlayerId(existingPlayerId)) {
    const existingPlayer = await findPlayerById(existingPlayerId);

    if (existingPlayer) {
      return {
        playerId: existingPlayer.id,
        shouldSetCookie: false,
      };
    }
  }

  const player = await createPlayer();

  return {
    playerId: player.id,
    shouldSetCookie: true,
  };
}
