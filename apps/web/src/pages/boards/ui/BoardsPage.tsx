import { ArrowLeft, ChevronRight, FileText, FolderOpenDot } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { boardDirectory } from "../mock/board-directory";
import type { BoardKey } from "../mock/board-directory";
import type { BoardsPageProps } from "../model/types";

export function BoardsPage({ board, post }: BoardsPageProps) {
  const boardKey = board as BoardKey;
  const boardData = boardDirectory[boardKey];

  if (!boardData) {
    notFound();
  }

  const selectedPost = post
    ? boardData.posts.find((item) => item.slug === post)
    : boardData.posts[0];

  if (!selectedPost) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#d9e4ee_0%,#eef4f8_18%,#f6f8fb_100%)] px-4 py-5 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
        >
          <ArrowLeft className="size-4" />
          메인으로 돌아가기
        </Link>

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Board View
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {boardData.label}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">{boardData.description}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              게시글 {boardData.posts.length}건
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FolderOpenDot className="size-4 text-sky-600" />
              게시글 목록
            </div>
            <ul className="mt-5 space-y-3">
              {boardData.posts.map((item) => {
                const isActive = item.slug === selectedPost?.slug;

                return (
                  <li key={item.slug}>
                    <Link
                      href={`/boards/${boardKey}?post=${item.slug}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-2xl border px-4 py-4 transition ${
                        isActive
                          ? "border-sky-200 bg-sky-50/80"
                          : "border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-2 text-xs text-slate-500">
                        {item.department} · {item.timestamp}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            {selectedPost ? (
              <>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                  <FileText className="size-4" />
                  게시글 미리보기
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {selectedPost.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span>{selectedPost.department}</span>
                  <ChevronRight className="size-4" />
                  <span>{selectedPost.timestamp}</span>
                </div>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm leading-7 text-slate-700">
                  {selectedPost.body}
                </div>
              </>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
