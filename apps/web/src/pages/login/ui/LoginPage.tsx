"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { ArrowRight, BadgeCheck, Building2, KeyRound, ShieldCheck, UserRound } from "lucide-react";

export function LoginPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidCredential = employeeId === "aegis-0123" && password === "021224";

    if (!isValidCredential) {
      setErrorMessage("계정 정보가 일치하지 않습니다. 인사팀에서 전달된 정보를 다시 확인하세요.");
      return;
    }

    setErrorMessage("");
    startTransition(() => {
      router.push("/");
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-sky-50 to-cyan-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_28%)]" />
      <div className="bg-aurora-pan absolute inset-[-10%] bg-[radial-gradient(circle_at_20%_30%,_rgba(56,189,248,0.28),_transparent_26%),radial-gradient(circle_at_78%_24%,_rgba(59,130,246,0.2),_transparent_22%),radial-gradient(circle_at_72%_72%,_rgba(52,211,153,0.24),_transparent_24%),radial-gradient(circle_at_30%_78%,_rgba(125,211,252,0.2),_transparent_20%)] blur-3xl" />
      <div className="bg-blob-float absolute top-[2%] left-[-2%] h-88 w-88 rounded-full bg-sky-300/35 blur-3xl" />
      <div className="bg-blob-drift absolute right-[0%] bottom-[6%] h-[26rem] w-[26rem] rounded-full bg-emerald-300/28 blur-3xl" />
      <div className="bg-blob-float absolute top-[42%] right-[14%] h-72 w-72 rounded-full bg-cyan-200/28 blur-3xl [animation-delay:-8s]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden rounded-[2rem] border border-white/70 bg-white/60 p-10 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:block">
          <div className="mb-12 flex items-center gap-3">
            <div className="rounded-2xl bg-sky-600 p-3 text-white shadow-lg shadow-sky-200">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-sky-700 uppercase">
                Employee Intranet
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Aegis Corp.</h1>
            </div>
          </div>

          <div className="max-w-xl space-y-5">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold tracking-[0.24em] text-sky-700 uppercase">
              Secure Access Portal
            </span>
            <h2 className="text-5xl leading-tight font-semibold tracking-tight text-slate-950">
              사내 시스템을 위한 간결한 로그인 경험
            </h2>
            <p className="text-base leading-7 text-slate-600">
              직원 계정으로 인사, 문서, 승인 시스템에 접속하세요. 외부 방문자는 게스트 모드로 제한된
              메뉴를 사용할 수 있습니다.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="size-5" />
              </div>
              <p className="text-sm font-semibold text-slate-900">2단계 인증 지원</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                사내 계정 로그인 시 보안 정책에 따라 추가 인증이 활성화됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <BadgeCheck className="size-5" />
              </div>
              <p className="text-sm font-semibold text-slate-900">실시간 시스템 상태</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                그룹웨어와 내부 API 상태가 정상이며 오늘 오전 9시 01분에 마지막 점검을 마쳤습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:px-8">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="rounded-2xl bg-sky-600 p-3 text-white shadow-lg shadow-sky-200">
              <Building2 className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-sky-700 uppercase">
                Employee Intranet
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Aegis Corp.</h1>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
              Sign In
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              업무 시스템 로그인
            </h2>
            <p className="text-sm leading-6 text-slate-500">
              사번 또는 회사 이메일로 로그인하세요.
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="employee-id" className="text-sm font-medium text-slate-700">
                아이디
              </label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="employee-id"
                  type="text"
                  placeholder="aegis-0123"
                  className="pl-10"
                  autoComplete="username"
                  value={employeeId}
                  onChange={(event) => setEmployeeId(event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="employee-password" className="text-sm font-medium text-slate-700">
                  비밀번호
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-sky-700 transition hover:text-sky-800"
                >
                  비밀번호 재설정
                </button>
              </div>
              <div className="relative">
                <KeyRound className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="employee-password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="pl-10"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              보안 상태 정상. 현재 네트워크는 사내망으로 인식되었습니다.
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                {errorMessage}
              </div>
            ) : null}

            <div className="space-y-3 pt-1">
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="h-11 w-full bg-sky-600 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-500"
              >
                {isPending ? "이동 중..." : "로그인"}
                <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-11 w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              >
                게스트 로그인
              </Button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-xs text-slate-500">
            <span>System Status: Online</span>
            <span>Copyright 2026. E.Hyun Project</span>
          </div>
        </section>
      </div>
    </main>
  );
}
