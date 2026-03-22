import Link from "next/link";
import { ArrowRight, Building2, FileSearch, LoaderCircle, TriangleAlert } from "lucide-react";

const routeCards = [
  {
    href: "/login",
    title: "Login",
    description: "실제 로그인 페이지를 확인합니다.",
    icon: Building2,
  },
  {
    href: "/preview/loading",
    title: "Loading",
    description: "기초 로딩 상태 화면을 확인합니다.",
    icon: LoaderCircle,
  },
  {
    href: "/preview/error",
    title: "Error",
    description: "에러 상태 화면과 복구 액션 구성을 확인합니다.",
    icon: TriangleAlert,
  },
  {
    href: "/preview/not-found",
    title: "Not Found",
    description: "404 상태 화면을 확인합니다.",
    icon: FileSearch,
  },
];

export function RouteIndexPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-sky-50 to-cyan-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="w-full rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-sky-600 p-3 text-white shadow-lg shadow-sky-200">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-sky-700 uppercase">
                Employee Intranet
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Route Preview</h1>
            </div>
          </div>

          <div className="mt-8 max-w-2xl space-y-3">
            <p className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">Preview</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              페이지 구조를 실제 라우팅으로 확인해 보세요
            </h2>
            <p className="text-sm leading-6 text-slate-500">
              홈은 미리보기 허브로 두고, 실제 페이지와 상태 화면은 각각 개별 라우트에서 확인할 수
              있게 연결해두었습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {routeCards.map(({ href, title, description, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="size-5" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{description}</p>
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-sky-700">
                  페이지 열기
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
