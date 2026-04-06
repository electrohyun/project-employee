"use client";

import { AlertTriangle, Building2, RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/ui/button";

export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-sky-50 to-cyan-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-sky-600 p-3 text-white shadow-lg shadow-sky-200">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-sky-700 uppercase">
                Employee Intranet
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Aegis Corp.</h1>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold tracking-[0.24em] text-rose-700 uppercase">Error</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              접속 권한을 확인하는 중 문제가 발생했습니다
            </h2>
            <p className="text-sm leading-6 text-slate-500">
              일시적인 네트워크 오류이거나 내부 시스템 응답이 지연되고 있을 수 있습니다.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <div className="space-y-1">
                <p className="font-medium">요청을 정상적으로 처리하지 못했습니다.</p>
                <p className="leading-6 text-rose-800/90">
                  잠시 후 다시 시도해 주세요. 문제가 반복되면 관리자에게 문의하는 것이 좋습니다.
                </p>
                {error.digest ? <p className="text-xs text-rose-700/80">Error ID: {error.digest}</p> : null}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={reset}
              className="h-11 flex-1 bg-sky-600 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-500"
            >
              <RotateCcw className="size-4" />
              다시 시도
            </Button>

            <Button
              asChild
              type="button"
              variant="outline"
              size="lg"
              className="h-11 flex-1 border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            >
              <Link href="/">홈으로 이동</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
