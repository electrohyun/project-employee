import { Button } from "@/shared/ui/button";
import { Terminal, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4 text-zinc-50">
      <div className="absolute inset-0 z-0 opacity-10" />

      <div className="z-10 w-full max-w-md space-y-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-full bg-emerald-500/10 p-3 ring-1 ring-emerald-500/20">
            <ShieldCheck className="size-8 text-emerald-500" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter sm:text-2xl">Aegis Corp.</h1>
          <p className="text-sm text-zinc-400">
            SYSTEM STATUS: <span className="animate-pulse text-emerald-500">ENCRYPTED</span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-800 bg-black/40 p-4 font-mono text-xs text-zinc-500">
            <p className="flex items-center gap-2">
              <Terminal className="size-3" />
              Waiting for biometric authentication...
            </p>
          </div>

          <Button
            variant="default"
            size="lg"
            className="group w-full bg-emerald-600 font-bold text-white hover:bg-emerald-500"
          >
            접속 시도 (Access System)
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full border-zinc-700 bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          >
            세션 종료
          </Button>
        </div>

        <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">
          Copyright 2026. E.Hyun Project
        </p>
      </div>
    </main>
  );
}
