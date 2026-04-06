import { NextResponse } from "next/server";

import {
  ensurePlayerSession,
  PLAYER_SESSION_COOKIE_NAME,
  playerSessionCookieOptions,
} from "@/shared/lib/server/player-session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { playerId, shouldSetCookie } = await ensurePlayerSession();
    const response = NextResponse.redirect(new URL("/login", request.url));

    if (shouldSetCookie) {
      response.cookies.set(PLAYER_SESSION_COOKIE_NAME, playerId, playerSessionCookieOptions);
    }

    return response;
  } catch (error) {
    console.error("Failed to bootstrap player session.", error);

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "session-init-failed");

    return NextResponse.redirect(loginUrl);
  }
}
