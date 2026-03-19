"use client";

import { ErrorPage } from "@/pages";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RouteError({ error, reset }: ErrorPageProps) {
  return <ErrorPage error={error} reset={reset} />;
}
