"use client";

import { ErrorPage } from "@/pages/error";
import type { ErrorPageProps } from "@/pages/error";

export default function RouteError({ error, reset }: ErrorPageProps) {
  return <ErrorPage error={error} reset={reset} />;
}
