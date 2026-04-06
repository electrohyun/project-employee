"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, KeyRound, UserRound } from "lucide-react";
import { completeLoginSuccessQuestAction } from "../model/complete-login-success-quest";
import { useQuestCelebration } from "@/app/providers/quest-celebration";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface LoginFormProps {
  error?: string;
}

const sessionBootstrapErrorMessage =
  "세션을 준비하지 못했습니다. 잠시 후 다시 시도하거나 관리자에게 문의하세요.";
const sessionLoadErrorMessage =
  "기존 세션을 확인하지 못했습니다. 잠시 후 다시 시도하거나 관리자에게 문의하세요.";

export function LoginForm({ error }: LoginFormProps) {
  const router = useRouter();
  const { celebrate } = useQuestCelebration();
  const [isPending, startTransition] = useTransition();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const demoEmployeeId = process.env.NEXT_PUBLIC_DEMO_EMPLOYEE_ID;
  const demoEmployeePassword = process.env.NEXT_PUBLIC_DEMO_EMPLOYEE_PASSWORD;
  const errorMessageId = "login-error";
  const serverErrorMessage =
    error === "session-init-failed"
      ? sessionBootstrapErrorMessage
      : error === "session-load-failed"
        ? sessionLoadErrorMessage
        : "";
  const visibleErrorMessage = errorMessage || serverErrorMessage;
  const hasError = Boolean(visibleErrorMessage);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!demoEmployeeId || !demoEmployeePassword) {
      setErrorMessage("로그인 계정이 아직 설정되지 않았습니다. 관리자에게 문의하세요.");
      return;
    }

    const isValidCredential = employeeId === demoEmployeeId && password === demoEmployeePassword;

    if (!isValidCredential) {
      setErrorMessage("계정 정보가 일치하지 않습니다. 인사팀에서 전달된 정보를 다시 확인하세요.");
      return;
    }

    setErrorMessage("");
    const result = await completeLoginSuccessQuestAction();

    if (result.error) {
      setErrorMessage(result.error);
      return;
    }

    celebrate(result.completedQuests);

    startTransition(() => {
      router.replace("/");
    });
  };

  return (
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
            placeholder="아이디를 입력하세요"
            className="pl-10"
            autoComplete="username"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorMessageId : undefined}
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
          {visibleErrorMessage}
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
  );
}
