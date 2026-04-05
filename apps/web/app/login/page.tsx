import { LoginPage } from "@/pages/login";
import { getCurrentPlayerId } from "@/shared/lib/server/player-session";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page() {
  const playerId = await getCurrentPlayerId();

  if (!playerId) {
    redirect("/login/bootstrap");
  }

  return <LoginPage />;
}
