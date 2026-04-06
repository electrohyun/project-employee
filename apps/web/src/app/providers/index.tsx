"use client";

import type { ReactNode } from "react";

import { QuestCelebrationProvider } from "@/shared/lib/quest-celebration";
import { QueryProvider } from "./queryClient";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <QuestCelebrationProvider>{children}</QuestCelebrationProvider>
    </QueryProvider>
  );
}
