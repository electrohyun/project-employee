"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { RootNavigation } from "./RootNavigation";

export function MobileRootNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]"
          />

          <div className="absolute inset-y-0 left-0 flex w-[300px] max-w-[85vw] flex-col overflow-y-auto border-r border-slate-200/80 bg-[linear-gradient(180deg,#0f172a_0%,#111827_38%,#172036_100%)] text-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-200/80 uppercase">
                Navigation
              </p>
              <button
                type="button"
                aria-label="메뉴 닫기"
                onClick={() => setIsOpen(false)}
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <RootNavigation onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
