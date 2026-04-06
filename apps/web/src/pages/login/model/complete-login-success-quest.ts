"use server";

import {
  completeLoginSuccessQuest,
  type CompletedQuest,
} from "@/shared/lib/server/quest-progress";
import { getCurrentPlayerId } from "@/shared/lib/server/player-session";

interface CompleteLoginSuccessQuestResult {
  completedQuests: CompletedQuest[];
  error?: string;
  status: "completed";
}

export async function completeLoginSuccessQuestAction(): Promise<CompleteLoginSuccessQuestResult> {
  try {
    const playerId = await getCurrentPlayerId();

    if (!playerId) {
      return {
        completedQuests: [],
        error: "플레이어 세션을 확인할 수 없습니다.",
        status: "completed",
      };
    }

    return await completeLoginSuccessQuest(playerId);
  } catch (error) {
    console.error("Failed to complete login quest.", error);

    return {
      completedQuests: [],
      error: "로그인 퀘스트를 완료 처리하지 못했습니다.",
      status: "completed",
    };
  }
}
