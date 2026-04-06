import { Building2, ClipboardList } from "lucide-react";
import Link from "next/link";

import { sidebarLinks } from "../mock/root-page";

interface RootNavigationProps {
  onNavigate?: () => void;
}

export function RootNavigation({ onNavigate }: RootNavigationProps) {
  return (
    <>
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sky-500/15 p-3 text-sky-200 ring-1 ring-inset ring-sky-300/20">
            <Building2 className="size-6" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.26em] text-sky-200/80 uppercase">
              Employee Intranet
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-white">Aegis Corp.</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-5">
        <Link
          href="/quests"
          onClick={onNavigate}
          className="group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left text-sm text-slate-300 transition hover:bg-white/7 hover:text-white focus-visible:bg-white/7 focus-visible:text-white"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-white/6 text-slate-300 transition group-hover:bg-white/8 group-hover:text-white group-focus-visible:bg-white/8 group-focus-visible:text-white">
            <ClipboardList className="size-4.5" />
          </span>
          <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
            <span className="font-medium tracking-[0.01em]">할당 업무</span>
            <span className="flex size-6 shrink-0 animate-pulse items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white shadow-[0_0_0_0_rgba(239,68,68,0.45)] transition group-hover:scale-105">
              3
            </span>
          </span>
        </Link>

        <div className="mt-4 h-px bg-white/10" />

        <div className="mt-4 space-y-1">
          {sidebarLinks.map(({ label, icon: Icon, active, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onNavigate}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm transition ${
                active ? "bg-sky-400/12 text-white ring-1 ring-inset ring-sky-300/30" : "text-slate-300 hover:bg-white/6 hover:text-white focus-visible:bg-white/6 focus-visible:text-white"
              }`}
            >
              <span
                className={`flex size-10 items-center justify-center rounded-2xl ${
                  active ? "bg-sky-400/14 text-sky-100" : "bg-white/6 text-slate-300"
                }`}
              >
                <Icon className="size-4.5" />
              </span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
