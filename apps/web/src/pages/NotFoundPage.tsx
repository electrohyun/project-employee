import Link from "next/link";
import { Building2, FileSearch } from "lucide-react";

import { Button } from "@/shared/ui/button";

export function NotFoundPage() {
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

          <div className="mt-8 flex size-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
            <FileSearch className="size-7" />
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">404 Not Found</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              요청한 문서를 찾을 수 없습니다
            </h2>
            <p className="text-sm leading-6 text-slate-500">
              페이지가 삭제되었거나 다른 경로로 이동되었을 수 있습니다. 홈 화면으로 돌아가 다시
              접근해 주세요.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
            경로를 직접 입력했다면 주소를 다시 확인해 보세요. 내부 링크를 통해 접근하면 더 안전합니다.
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-11 w-full bg-sky-600 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-500"
            >
              <Link href="/">홈으로 이동</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
