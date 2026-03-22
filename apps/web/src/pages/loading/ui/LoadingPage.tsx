import { Building2, LoaderCircle, ShieldCheck } from "lucide-react";

export function LoadingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-sky-50 to-cyan-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-10">
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
            <p className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">Loading</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              보안 게이트를 확인하고 있습니다
            </h2>
            <p className="text-sm leading-6 text-slate-500">
              사내망 연결 상태와 로그인 페이지 자원을 순서대로 불러오는 중입니다.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/85 p-6">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <ShieldCheck className="size-4 shrink-0" />
              보안 모듈과 연결 상태를 점검하고 있습니다.
            </div>

            <div className="mt-6 space-y-4">
              <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
              <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
              <div className="h-4 w-20 animate-pulse rounded-full bg-slate-200" />
              <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-100" />
              <div className="h-11 w-full animate-pulse rounded-2xl bg-sky-100" />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <LoaderCircle className="size-4 animate-spin text-sky-600" />
            잠시만 기다려 주세요...
          </div>
        </section>
      </div>
    </main>
  );
}
