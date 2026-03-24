"use client";

import { ErrorPage } from "@/pages/error";

export default function PreviewErrorPage() {
  return (
    <ErrorPage
      error={new Error("Preview error")}
      reset={() => {
        window.location.reload();
      }}
    />
  );
}
