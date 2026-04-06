import { LoginPage } from "@/pages/login";
import { getCurrentPlayerId } from "@/shared/lib/server/player-session";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

interface LoginPageProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function Page({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;
  let playerId: string | null = null;
  let pageError = error;

  try {
    playerId = await getCurrentPlayerId();
  } catch {
    pageError = "session-load-failed";
  }

  const hasSessionError =
    pageError === "session-init-failed" || pageError === "session-load-failed";

  if (!playerId && !hasSessionError) {
    redirect("/login/bootstrap");
  }

  return <LoginPage error={pageError} />;
}
