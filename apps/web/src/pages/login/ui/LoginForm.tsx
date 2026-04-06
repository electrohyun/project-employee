"use client";

import { ArrowRight, KeyRound, LoaderCircle, UserRound } from "lucide-react";
import { useLoginForm } from "../model/useLoginForm";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface LoginFormProps {
  error?: string;
}

export function LoginForm({ error }: LoginFormProps) {
  const errorMessageId = "login-error";
  const {
    employeeId,
    password,
    errorMessage,
    hasError,
    isBusy,
    setEmployeeId,
    setPassword,
    handleSubmit,
  } = useLoginForm({ error });

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit} aria-busy={isBusy}>
      <div className="space-y-2">
        <label htmlFor="employee-id" className="text-sm font-medium text-slate-700">
          아이디
        </label>
        <div className="relative">
          <UserRound className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            id="employee-id"
            type="text"
            placeholder="아이디를 입력하세요"
            className="pl-10"
            autoComplete="username"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorMessageId : undefined}
            disabled={isBusy}
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
            aria-invalid={hasError}
            aria-describedby={hasError ? errorMessageId : undefined}
            disabled={isBusy}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
        보안 상태 정상. 현재 네트워크는 사내망으로 인식되었습니다.
      </div>

      {hasError ? (
        <div
          id={errorMessageId}
          role="alert"
          aria-live="assertive"
          className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-900"
        >
          {errorMessage}
        </div>
      ) : null}

      <div className="space-y-3 pt-1">
        <Button
          type="submit"
          size="lg"
          disabled={isBusy}
          className="h-11 w-full bg-sky-600 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-500"
        >
          {isBusy ? (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              인증 확인 중...
            </>
          ) : (
            <>
              로그인
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={isBusy}
          className="h-11 w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
        >
          게스트 로그인
        </Button>
      </div>

      <p className="sr-only" aria-live="polite">
        {isBusy ? "로그인 정보를 확인하고 퀘스트 완료를 처리하는 중입니다." : ""}
      </p>
    </form>
  );
}
