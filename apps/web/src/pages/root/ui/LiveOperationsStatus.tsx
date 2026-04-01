"use client";

import { useEffect, useState } from "react";
import { syncMessages } from "../mock/live-operations-status";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function LiveOperationsStatus() {
  const [now, setNow] = useState<Date | null>(null);
  const [syncIndex, setSyncIndex] = useState(0);
  const [secondsFromSync, setSecondsFromSync] = useState(0);

  useEffect(() => {
    setNow(new Date());

    const timer = window.setInterval(() => {
      setNow(new Date());
      setSecondsFromSync((prev) => {
        if (prev >= 11) {
          setSyncIndex((current) => (current + 1) % syncMessages.length);
          return 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-950">
      <div className="flex items-center gap-2 font-semibold">
        <span className="relative flex size-2.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative rounded-full bg-emerald-500 size-2.5" />
        </span>
        실시간 모니터링 중
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-emerald-900/80">
        <span>현재 시각 {now ? formatTime(now) : "--:--:--"}</span>
        <span>마지막 동기화 {secondsFromSync}초 전</span>
      </div>
      <p className="mt-2 text-[13px] text-emerald-900/80">{syncMessages[syncIndex]}</p>
    </div>
  );
}
