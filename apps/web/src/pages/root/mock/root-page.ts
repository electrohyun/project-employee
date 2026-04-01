import {
  BellRing,
  Building2,
  FileLock2,
  MessagesSquare,
  Siren,
  UserRoundCog,
  Users,
} from "lucide-react";
import type { BoardSection, IncidentFeedItem, SidebarLink, SummarySlide } from "../model/types";

export const summarySlides: readonly SummarySlide[] = [
  {
    title: "보안 상태",
    value: "권한 승인과 정기 검토가 정상 범위 내에서 처리되고 있습니다.",
    icon: "shield",
    tone: "text-emerald-700",
  },
  {
    title: "장애 리포트",
    value: "출입 로그 누락 관련 보고 1건이 재확인 대기 중입니다.",
    icon: "alert",
    tone: "text-amber-700",
  },
  {
    title: "인사 문의",
    value: "일반 문의 응답은 정상 범위 내에서 처리되고 있습니다.",
    icon: "inquiry",
    tone: "text-sky-700",
  },
] as const;

export const boardSections: readonly BoardSection[] = [
  {
    href: "/boards/notices",
    title: "전체 공지 게시판",
    description: "정책 공지, 점검 일정, 관리자 발령 사항이 게시됩니다.",
    icon: BellRing,
    accent: "from-sky-500/15 via-cyan-500/10 to-transparent",
    badge: "정상 운영",
    badgeTone: "border-sky-200 bg-sky-50 text-sky-700",
    purpose: "확인 메모",
    reason: "금일 공지 반영 여부와 운영 정책 변경사항만 가볍게 확인하면 됩니다.",
    items: [
      {
        label: "[보안 공지] 외부 저장장치 반입 점검 일정 공지",
        href: "/boards/notices?post=security-device-check",
      },
      {
        label: "[운영 공지] 금일 18:30 사내 메일 시스템 패치 예정",
        href: "/boards/notices?post=mail-patch",
      },
      {
        label: "[인사 알림] 신규 관리자 계정 생성 및 부서 배정 안내",
        href: "/boards/notices?post=new-admin-account",
      },
    ],
  },
  {
    href: "/boards/incidents",
    title: "장애 / 사고 리포트",
    description: "시설, 전산, 계정 관련 이상 징후와 사고 보고가 접수됩니다.",
    icon: Siren,
    accent: "from-amber-500/18 via-orange-500/10 to-transparent",
    badge: "재확인 필요",
    badgeTone: "border-amber-200 bg-amber-50 text-amber-800",
    purpose: "확인 메모",
    reason: "현재는 누락 로그 관련 보고 1건만 우선 재확인하면 됩니다.",
    items: [
      {
        label: "[보안실] B2 구역 출입 로그 17분 누락",
        href: "/boards/incidents?post=missing-access-log",
      },
      {
        label: "[전산팀] 데이터센터 UPS 전력 사용량 급증",
        href: "/boards/incidents?post=ups-power-surge",
      },
      {
        label: "[그룹웨어] 관리자 계정 자동응답 메시지 반복 전송",
        href: "/boards/incidents?post=auto-response-loop",
      },
    ],
  },
  {
    href: "/boards/community",
    title: "익명 사내 커뮤니티",
    description: "직원 익명 게시글과 캡처 공유, 부서 관련 불만이 올라옵니다.",
    icon: MessagesSquare,
    accent: "from-slate-500/14 via-slate-400/8 to-transparent",
    badge: "관찰 유지",
    badgeTone: "border-slate-200 bg-slate-100 text-slate-700",
    purpose: "확인 메모",
    reason: "대체로 잠잠하지만 재업본 관련 언급만 간헐적으로 확인하세요.",
    items: [
      {
        label: "[익명] 요즘 특정 층에서 사람 안 보이지 않냐",
        href: "/boards/community?post=empty-floor-rumor",
      },
      {
        label: "[캡처 공유] 삭제된 글 원문 재업본 확산",
        href: "/boards/community?post=deleted-post-capture",
      },
      {
        label: "[불만 글] 특정 부서 승인권자가 아예 연락이 안 됨",
        href: "/boards/community?post=missing-approver",
      },
    ],
  },
  {
    href: "/boards/hr-support",
    title: "인사 / 총무 문의",
    description: "급여, 휴가, 문서, 담당자 부재 관련 문의가 접수됩니다.",
    icon: UserRoundCog,
    accent: "from-rose-500/14 via-pink-500/10 to-transparent",
    badge: "정상 처리",
    badgeTone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    purpose: "확인 메모",
    reason: "일반 문의는 정상 범위 내에서 처리 중이며, 누락 건만 없는지 확인하면 됩니다.",
    items: [
      {
        label: "[급여 문의] 야근 수당 반영 누락 확인 요청",
        href: "/boards/hr-support?post=salary-overtime-missing",
      },
      {
        label: "[휴가 승인] 결재권자 미응답으로 일정 차질 발생",
        href: "/boards/hr-support?post=leave-approval-delay",
      },
      {
        label: "[총무 문의] 경조사 서류 담당자 부재로 접수 보류",
        href: "/boards/hr-support?post=document-owner-missing",
      },
    ],
  },
] as const;

export const sidebarLinks: readonly SidebarLink[] = [
  { label: "메인 대시보드", icon: Building2, active: true, href: "/" },
  { label: "전사 공지", icon: BellRing, active: false, href: "/boards/notices" },
  { label: "장애 / 사고 리포트", icon: Siren, active: false, href: "/boards/incidents" },
  { label: "익명 커뮤니티", icon: MessagesSquare, active: false, href: "/boards/community" },
  { label: "인사 / 총무 문의", icon: Users, active: false, href: "/boards/hr-support" },
  { label: "보안 승인 / 출입 권한", icon: FileLock2, active: false, href: "/boards/access" },
] as const;

export const incidentFeed: readonly IncidentFeedItem[] = [
  {
    title: "출입 기록 무결성 재검토",
    meta: "보안실 · 08:42 업데이트",
    tone: "text-emerald-700",
  },
  {
    title: "정기 문의 분류 배치 완료",
    meta: "인사운영팀 · 09:15 업데이트",
    tone: "text-emerald-700",
  },
  {
    title: "공지 반영 상태 정상",
    meta: "커뮤니케이션 셀 · 09:31 업데이트",
    tone: "text-emerald-700",
  },
] as const;
