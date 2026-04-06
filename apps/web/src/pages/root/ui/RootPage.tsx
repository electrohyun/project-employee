import {
  AlertTriangle,
  ArrowRight,
  Clock3,
  FileSearch,
} from "lucide-react";
import Link from "next/link";

import { formatIntranetDateLabel } from "@/shared/lib/date";
import { Button } from "@/shared/ui/button";

import { LiveOperationsStatus } from "./LiveOperationsStatus";
import { MobileRootNavigation } from "./MobileRootNavigation";
import { RootNavigation } from "./RootNavigation";
import { SummarySlider } from "./SummarySlider";
import { boardSections, incidentFeed, summarySlides } from "../mock/root-page";

const gameDateLabel = formatIntranetDateLabel(new Date());
const operatorLevel = 1;
const experienceProgress = 0;
const experienceLabel = `${experienceProgress} / 100 EXP`;
const accessLabel = "운영 관리 3등급";

export function RootPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#d9e4ee_0%,#eef4f8_18%,#f6f8fb_100%)] px-4 py-4 text-slate-900 sm:px-6 sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1600px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/82 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <aside className="hidden w-[300px] border-r border-slate-200/80 bg-[linear-gradient(180deg,#0f172a_0%,#111827_38%,#172036_100%)] text-slate-100 lg:flex lg:flex-col">
          <RootNavigation />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-slate-200/80 bg-white/88 px-5 py-5 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <div className="mb-4 lg:hidden">
                  <MobileRootNavigation />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1">
                    운영 관리
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
                    {gameDateLabel}
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                  내부 게시판 운영 현황
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                  대부분의 운영 항목은 정상 범위 내에서 유지되고 있습니다. 할당 업무와 예외 보고 몇
                  건만 우선 확인하세요.
                </p>
              </div>

              <section className="w-full max-w-[320px] rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.98)_0%,rgba(240,249,255,0.92)_100%)] px-4 py-4 shadow-[0_12px_30px_rgba(14,116,144,0.08)]">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.18em] text-emerald-700 uppercase">
                  <span>Operator Level</span>
                  <span>Lv.{operatorLevel}</span>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    접속 권한
                  </p>
                  <p className="text-sm font-semibold text-slate-900">{accessLabel}</p>
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-emerald-950/10">
                  <div
                    aria-hidden="true"
                    className="h-full rounded-full bg-[linear-gradient(90deg,#0f766e_0%,#14b8a6_55%,#67e8f9_100%)] shadow-[0_0_18px_rgba(20,184,166,0.35)] transition-[width] duration-700"
                    style={{ width: `${experienceProgress}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    세션 숙련도
                  </p>
                  <span className="text-xs text-slate-500">{experienceLabel}</span>
                </div>
              </section>
            </div>

            <div className="mt-6 grid gap-4 2xl:grid-cols-[minmax(0,1fr)_320px]">
              <SummarySlider slides={summarySlides} />

              <section className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#f9fbfd_0%,#f1f5f9_100%)] p-4.5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                      인계 메모
                    </p>
                    <h3 className="mt-1.5 text-base font-semibold tracking-tight text-slate-950">
                      오전 근무 메모
                    </h3>
                  </div>
                  <Clock3 className="size-5 text-slate-400" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  전반적인 운영 상태는 안정적입니다. 다만 출입 로그 누락 보고 1건과 익명 게시판
                  재업본 흐름만 간헐적으로 확인 바랍니다.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="relative flex size-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-400/70" />
                    <span className="relative size-2 rounded-full bg-green-400" />
                  </span>
                  신규 보고 감시 중
                </div>
              </section>
            </div>
          </header>

          <div className="grid min-h-0 flex-1 gap-6 px-5 py-5 sm:px-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <section className="min-w-0 space-y-5">
              <div className="flex flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    게시판 현황
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                    주요 게시판
                  </h3>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-xl bg-slate-900 px-4 text-white hover:bg-slate-800"
                >
                  <Link href="/boards/notices">
                    전체 게시판 보기
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {boardSections.map(
                  ({
                    href,
                    title,
                    description,
                    icon: Icon,
                    accent,
                    badge,
                    badgeTone,
                    purpose,
                    reason,
                    items,
                  }) => (
                    <article
                      key={title}
                      className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
                    >
                      <div
                        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b ${accent}`}
                      />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex size-13 items-center justify-center rounded-[1.2rem] border border-slate-200 bg-white text-slate-700 shadow-sm">
                              <Icon className="size-5" />
                            </div>
                            <div>
                              <p
                                className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase ${badgeTone}`}
                              >
                                {badge}
                              </p>
                              <h4 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                                {title}
                              </h4>
                            </div>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="rounded-full border-slate-200 bg-white/90 px-3 text-slate-700 hover:bg-slate-50"
                          >
                            <Link href={href}>열기</Link>
                          </Button>
                        </div>

                        <Link
                          href={href}
                          className="mt-5 block text-sm leading-6 text-slate-600 transition hover:text-slate-800"
                        >
                          {description}
                        </Link>

                        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
                          <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                            {purpose}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-700">{reason}</p>
                        </div>

                        <ul className="mt-5 space-y-3">
                          {items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                title={item.label}
                                className="flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-sky-200 hover:bg-sky-50/50 hover:text-slate-900 focus-visible:border-sky-300 focus-visible:bg-sky-50/60"
                              >
                                <FileSearch className="mt-0.5 size-4 shrink-0 text-slate-400" />
                                <span className="min-w-0 truncate leading-6">{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </section>

            <aside className="space-y-5">
              <section className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold tracking-[0.18em] text-sky-200 uppercase">
                  우선 확인
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">우선 대응 필요</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-300" />
                    출입 로그 누락이 인사 문의와 같은 시간대에 겹쳐 발생했습니다.
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-300" />
                    특정 관리자 계정 응답 패턴이 사고 리포트와 커뮤니티 글에서 동시에 언급됩니다.
                  </li>
                </ul>
              </section>

              <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                      최근 업데이트
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                      실시간 업데이트
                    </h3>
                  </div>
                  <Clock3 className="size-5 text-slate-400" />
                </div>

                <ul className="mt-5 space-y-3">
                  {incidentFeed.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50/85 px-4 py-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className={`text-sm font-semibold ${item.tone}`}>{item.title}</p>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-medium text-slate-500">
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          live
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">{item.meta}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <LiveOperationsStatus />

              <section className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#fff9ec_0%,#fff4d8_100%)] p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-700 uppercase">
                  승인 대기
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                  권한 승인 검토
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  예외 승인 요청과 출입 권한 변경 내역을 순서대로 검토하세요. 미처리 건은 금일 내
                  회신이 필요합니다.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
