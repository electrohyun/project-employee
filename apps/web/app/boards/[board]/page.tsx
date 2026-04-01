import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, FileText, FolderOpenDot } from "lucide-react";

const boardDirectory = {
  notices: {
    label: "전체 공지 게시판",
    description: "정책 공지, 점검 일정, 관리자 발령 사항이 게시됩니다.",
    posts: [
      {
        slug: "security-device-check",
        title: "[보안 공지] 외부 저장장치 반입 점검 일정 공지",
        department: "보안정책팀",
        timestamp: "2036. 03. 24. 08:20",
        body: "3월 26일 수요일부터 외부 저장장치 반입 점검이 시행됩니다. 대상 부서는 사용 장비 목록을 사전 제출 바랍니다.",
      },
      {
        slug: "mail-patch",
        title: "[운영 공지] 금일 18:30 사내 메일 시스템 패치 예정",
        department: "인프라운영팀",
        timestamp: "2036. 03. 24. 09:00",
        body: "금일 18시 30분부터 20분간 메일 시스템 패치가 예정되어 있습니다. 작업 중 간헐적 지연이 발생할 수 있습니다.",
      },
      {
        slug: "new-admin-account",
        title: "[인사 알림] 신규 관리자 계정 생성 및 부서 배정 안내",
        department: "인사운영팀",
        timestamp: "2036. 03. 24. 09:18",
        body: "신규 관리자 계정 생성이 완료되었습니다. 부서 배정 및 접근 권한은 오늘 중 반영 예정입니다.",
      },
    ],
  },
  incidents: {
    label: "장애 / 사고 리포트",
    description: "시설, 전산, 계정 관련 이상 징후와 사고 보고가 접수됩니다.",
    posts: [
      {
        slug: "missing-access-log",
        title: "[보안실] B2 구역 출입 로그 17분 누락",
        department: "보안실",
        timestamp: "2036. 03. 24. 08:42",
        body: "B2 구역 출입 로그가 17분간 기록되지 않았습니다. 해당 시간대 출입자 대조가 필요합니다.",
      },
      {
        slug: "ups-power-surge",
        title: "[전산팀] 데이터센터 UPS 전력 사용량 급증",
        department: "전산팀",
        timestamp: "2036. 03. 24. 09:03",
        body: "UPS 사용량이 기준 대비 급증했습니다. 냉각 설비 이상 여부와 연동 장비 목록 확인이 필요합니다.",
      },
      {
        slug: "auto-response-loop",
        title: "[그룹웨어] 관리자 계정 자동응답 메시지 반복 전송",
        department: "그룹웨어 운영",
        timestamp: "2036. 03. 24. 09:11",
        body: "특정 관리자 계정에서 동일한 자동응답이 반복 전송되고 있습니다. 계정 잠금 및 발송 기록 조회가 권고됩니다.",
      },
    ],
  },
  community: {
    label: "익명 사내 커뮤니티",
    description: "직원 익명 게시글과 캡처 공유, 부서 관련 불만이 올라옵니다.",
    posts: [
      {
        slug: "empty-floor-rumor",
        title: "[익명] 요즘 특정 층에서 사람 안 보이지 않냐",
        department: "익명",
        timestamp: "2036. 03. 24. 08:54",
        body: "이번 주 들어 특정 층에 사람이 거의 보이지 않는다는 글이 여러 차례 올라왔습니다. 캡처 공유가 확산 중입니다.",
      },
      {
        slug: "deleted-post-capture",
        title: "[캡처 공유] 삭제된 글 원문 재업본 확산",
        department: "익명",
        timestamp: "2036. 03. 24. 09:07",
        body: "삭제된 원문 게시글의 캡처가 다시 돌고 있습니다. 원문 작성자와 삭제 시점 관련 추측 댓글이 계속 늘어나는 상황입니다.",
      },
      {
        slug: "missing-approver",
        title: "[불만 글] 특정 부서 승인권자가 아예 연락이 안 됨",
        department: "익명",
        timestamp: "2036. 03. 24. 09:21",
        body: "승인권자 미응답 사례가 반복된다는 불만 글입니다. 동일 인물 언급이 여러 게시글에서 중복 확인됩니다.",
      },
    ],
  },
  "hr-support": {
    label: "인사 / 총무 문의",
    description: "급여, 휴가, 문서, 담당자 부재 관련 문의가 접수됩니다.",
    posts: [
      {
        slug: "salary-overtime-missing",
        title: "[급여 문의] 야근 수당 반영 누락 확인 요청",
        department: "인사운영팀",
        timestamp: "2036. 03. 24. 08:33",
        body: "야근 수당 누락 건으로 재확인 요청이 접수되었습니다. 정산 기준표와 근태 기록 대조가 필요합니다.",
      },
      {
        slug: "leave-approval-delay",
        title: "[휴가 승인] 결재권자 미응답으로 일정 차질 발생",
        department: "인사운영팀",
        timestamp: "2036. 03. 24. 08:58",
        body: "결재권자 장기 미응답으로 휴가 일정이 지연되고 있다는 문의입니다. 대체 승인 가능 여부 검토가 필요합니다.",
      },
      {
        slug: "document-owner-missing",
        title: "[총무 문의] 경조사 서류 담당자 부재로 접수 보류",
        department: "총무팀",
        timestamp: "2036. 03. 24. 09:16",
        body: "경조사 서류 접수가 담당자 부재로 보류 중이라는 문의입니다. 인수인계 상태 확인이 필요합니다.",
      },
    ],
  },
  access: {
    label: "보안 승인 / 출입 권한",
    description: "예외 승인 요청과 출입 권한 변경 내역을 확인합니다.",
    posts: [
      {
        slug: "temporary-access-request",
        title: "[승인 요청] B2 임시 출입 권한 연장 요청",
        department: "보안실",
        timestamp: "2036. 03. 24. 09:04",
        body: "시설 점검 인력의 B2 구역 임시 출입 권한 연장 요청입니다. 작업 종료 예정 시각은 20:30입니다.",
      },
    ],
  },
} as const;

type BoardKey = keyof typeof boardDirectory;

interface BoardPageProps {
  params: Promise<{ board: string }>;
  searchParams: Promise<{ post?: string }>;
}

export default async function BoardPage({ params, searchParams }: BoardPageProps) {
  const { board } = await params;
  const { post } = await searchParams;
  const boardKey = board as BoardKey;
  const boardData = boardDirectory[boardKey];

  if (!boardData) {
    notFound();
  }

  const selectedPost = boardData.posts.find((item) => item.slug === post) ?? boardData.posts[0];

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
