import "server-only";

import { createServerSupabaseAdminClient } from "./supabase";

export const loginSuccessQuestId = "login_success";
const loginSuccessQuestName = "비밀의 기업";
const loginSuccessQuestNumber = 1;

export interface CompletedQuest {
  questId: string;
  questName: string;
  questNumber: number | null;
}

export async function completeLoginSuccessQuest(playerId: string) {
  const supabase = createServerSupabaseAdminClient();
  const completedAt = new Date().toISOString();

  const { data: existingProgress, error: loadError } = await supabase
    .from("player_quest_progress")
    .select("status")
    .eq("player_id", playerId)
    .eq("quest_id", loginSuccessQuestId)
    .maybeSingle();

  if (loadError) {
    throw new Error(`Failed to load login quest progress: ${loadError.message}`);
  }

  if (!existingProgress) {
    throw new Error("Login quest progress must exist before completion.");
  }

  if (existingProgress?.status === "completed") {
    return {
      completedQuests: [] as CompletedQuest[],
      status: "completed" as const,
    };
  }

  const { error: updateError } = await supabase
    .from("player_quest_progress")
    .update({
      status: "completed",
      completed_at: completedAt,
    })
    .eq("player_id", playerId)
    .eq("quest_id", loginSuccessQuestId)
    .eq("status", "active");

  if (updateError) {
    throw new Error(`Failed to complete login quest progress: ${updateError.message}`);
  }

  return {
    completedQuests: [
      {
        questId: loginSuccessQuestId,
        questName: loginSuccessQuestName,
        questNumber: loginSuccessQuestNumber,
      },
    ],
    status: "completed" as const,
  };
}
