"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { CompletedQuest } from "@/shared/lib/server/quest-progress";

interface QuestCelebrationContextValue {
  celebrate: (completedQuests: CompletedQuest[]) => void;
}

interface ActiveCelebration {
  completedQuests: CompletedQuest[];
  id: number;
}

const QuestCelebrationContext = createContext<QuestCelebrationContextValue | null>(null);

const confettiPieces = [
  { left: "8%", color: "#fcd34d", delay: "0ms", duration: "2200ms", rotate: "-18deg" },
  { left: "12%", color: "#fef08a", delay: "40ms", duration: "2350ms", rotate: "26deg" },
  { left: "16%", color: "#7dd3fc", delay: "80ms", duration: "2600ms", rotate: "12deg" },
  { left: "20%", color: "#c4b5fd", delay: "120ms", duration: "2450ms", rotate: "-22deg" },
  { left: "24%", color: "#6ee7b7", delay: "160ms", duration: "2300ms", rotate: "-8deg" },
  { left: "28%", color: "#f9a8d4", delay: "200ms", duration: "2500ms", rotate: "18deg" },
  { left: "33%", color: "#67e8f9", delay: "240ms", duration: "2500ms", rotate: "20deg" },
  { left: "37%", color: "#fdba74", delay: "180ms", duration: "2250ms", rotate: "-12deg" },
  { left: "42%", color: "#fdba74", delay: "320ms", duration: "2100ms", rotate: "-24deg" },
  { left: "46%", color: "#fcd34d", delay: "90ms", duration: "2550ms", rotate: "14deg" },
  { left: "50%", color: "#ffffff", delay: "60ms", duration: "2400ms", rotate: "8deg" },
  { left: "54%", color: "#93c5fd", delay: "160ms", duration: "2420ms", rotate: "-18deg" },
  { left: "58%", color: "#bef264", delay: "140ms", duration: "2550ms", rotate: "-16deg" },
  { left: "63%", color: "#fca5a5", delay: "220ms", duration: "2380ms", rotate: "24deg" },
  { left: "67%", color: "#bae6fd", delay: "220ms", duration: "2350ms", rotate: "16deg" },
  { left: "72%", color: "#6ee7b7", delay: "260ms", duration: "2520ms", rotate: "-20deg" },
  { left: "76%", color: "#fde68a", delay: "300ms", duration: "2500ms", rotate: "-10deg" },
  { left: "80%", color: "#c4b5fd", delay: "140ms", duration: "2280ms", rotate: "18deg" },
  { left: "84%", color: "#a7f3d0", delay: "120ms", duration: "2250ms", rotate: "24deg" },
  { left: "88%", color: "#f9a8d4", delay: "260ms", duration: "2460ms", rotate: "-16deg" },
  { left: "92%", color: "#a5f3fc", delay: "280ms", duration: "2450ms", rotate: "-14deg" },
  { left: "96%", color: "#fef3c7", delay: "200ms", duration: "2320ms", rotate: "12deg" },
];

interface QuestCelebrationProviderProps {
  children: ReactNode;
}

export function QuestCelebrationProvider({ children }: QuestCelebrationProviderProps) {
  const timeoutRef = useRef<number | null>(null);
  const [activeCelebration, setActiveCelebration] = useState<ActiveCelebration | null>(null);

  const clearCelebration = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setActiveCelebration(null);
  }, []);

  const celebrate = useCallback((completedQuests: CompletedQuest[]) => {
    if (completedQuests.length === 0) {
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setActiveCelebration({
      completedQuests,
      id: Date.now(),
    });

    timeoutRef.current = window.setTimeout(() => {
      setActiveCelebration(null);
      timeoutRef.current = null;
    }, 2800);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      celebrate,
    }),
    [celebrate],
  );

  const firstQuest = activeCelebration?.completedQuests[0];
  const questLabel =
    firstQuest && firstQuest.questNumber ? `${firstQuest.questNumber}번 퀘스트` : "신규 퀘스트";

  return (
    <QuestCelebrationContext.Provider value={contextValue}>
      {children}
      {activeCelebration ? (
        <div className="pointer-events-none fixed inset-0 z-[9999] flex items-start justify-center overflow-hidden px-4 pt-14 sm:pt-18">
          <div className="absolute inset-0 bg-white/44 backdrop-blur-[3px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.12)_100%)]" />

          {confettiPieces.map((piece, index) => (
            <span
              key={`${activeCelebration.id}-${piece.left}-${index}`}
              aria-hidden="true"
              className="quest-confetti-piece"
              style={
                {
                  left: piece.left,
                  backgroundColor: piece.color,
                  animationDelay: piece.delay,
                  animationDuration: piece.duration,
                  rotate: piece.rotate,
                } as CSSProperties
              }
            />
          ))}

          <div className="quest-celebration-pop pointer-events-auto relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/40 bg-[linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(12,74,110,0.94)_58%,rgba(21,128,61,0.92)_100%)] px-5 py-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.34)] backdrop-blur-xl sm:px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(103,232,249,0.18),_transparent_28%)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold tracking-[0.26em] text-sky-100/85 uppercase">
                Quest Complete
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                퀘스트 완료!
              </h3>
              {firstQuest ? (
                <p className="mt-3 text-sm leading-6 text-sky-50/88">
                  {questLabel}{" "}
                  <span className="font-semibold text-white">{firstQuest.questName}</span>
                  을(를) 달성했습니다.
                </p>
              ) : null}
              <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-sky-50/90">
                새로운 기록이 사내 시스템에 반영되었습니다.
              </div>
            </div>
            <button
              type="button"
              onClick={clearCelebration}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm text-white/80 transition hover:bg-white/14 hover:text-white"
              aria-label="축하 메시지 닫기"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </QuestCelebrationContext.Provider>
  );
}

export function useQuestCelebration() {
  const context = useContext(QuestCelebrationContext);

  if (!context) {
    throw new Error("useQuestCelebration must be used within QuestCelebrationProvider.");
  }

  return context;
}
