"use client";

import type { ReactNode } from "react";

import { QueryProvider } from "./queryClient";
import { QuestCelebrationProvider } from "./quest-celebration";

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
