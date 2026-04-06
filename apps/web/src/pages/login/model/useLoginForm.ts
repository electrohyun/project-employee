"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import type { FormEvent } from "react";

import { useQuestCelebration } from "@/shared/lib/quest-celebration";

import { completeLoginSuccessQuestAction } from "./complete-login-success-quest";

const sessionBootstrapErrorMessage =
  "세션을 준비하지 못했습니다. 잠시 후 다시 시도하거나 관리자에게 문의하세요.";
const sessionLoadErrorMessage =
  "기존 세션을 확인하지 못했습니다. 잠시 후 다시 시도하거나 관리자에게 문의하세요.";
const loginQuestUnexpectedErrorMessage =
  "로그인 처리 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 관리자에게 문의하세요.";
const missingCredentialErrorMessage =
  "로그인 계정이 아직 설정되지 않았습니다. 관리자에게 문의하세요.";
const invalidCredentialErrorMessage =
  "계정 정보가 일치하지 않습니다. 인사팀에서 전달된 정보를 다시 확인하세요.";

function getServerErrorMessage(error?: string) {
  if (error === "session-init-failed") {
    return sessionBootstrapErrorMessage;
  }

  if (error === "session-load-failed") {
    return sessionLoadErrorMessage;
  }

  return "";
}

function getCredentialErrorMessage(employeeId: string, password: string) {
  const demoEmployeeId = process.env.NEXT_PUBLIC_DEMO_EMPLOYEE_ID;
  const demoEmployeePassword = process.env.NEXT_PUBLIC_DEMO_EMPLOYEE_PASSWORD;

  if (!demoEmployeeId || !demoEmployeePassword) {
    return missingCredentialErrorMessage;
  }

  const isValidCredential = employeeId === demoEmployeeId && password === demoEmployeePassword;

  if (!isValidCredential) {
    return invalidCredentialErrorMessage;
  }

  return "";
}

interface UseLoginFormOptions {
  error?: string;
}

export function useLoginForm({ error }: UseLoginFormOptions) {
  const router = useRouter();
  const { celebrate } = useQuestCelebration();
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [clientErrorMessage, setClientErrorMessage] = useState("");

  const serverErrorMessage = getServerErrorMessage(error);
  const errorMessage = clientErrorMessage || serverErrorMessage;
  const hasError = Boolean(errorMessage);
  const isBusy = isSubmitting || isPending;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isBusy) {
      return;
    }

    const nextErrorMessage = getCredentialErrorMessage(employeeId, password);

    if (nextErrorMessage) {
      setClientErrorMessage(nextErrorMessage);
      return;
    }

    setClientErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await completeLoginSuccessQuestAction();

      if (result.error) {
        setClientErrorMessage(result.error);
        return;
      }

      celebrate(result.completedQuests);

      startTransition(() => {
        router.replace("/");
      });
    } catch (error) {
      console.error("Failed to submit login form.", error);
      setClientErrorMessage(loginQuestUnexpectedErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    employeeId,
    password,
    errorMessage,
    hasError,
    isBusy,
    setEmployeeId,
    setPassword,
    handleSubmit,
  };
}
