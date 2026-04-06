"use client";

import { MessageSquareMore, Minimize2, Search, SendHorizontal } from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Input } from "../input";

type ChatRoom = {
  id: "hr-onboarding";
  name: string;
  preview: string;
  status: string;
  unread: number;
};

type ChatMessage = {
  id: number;
  author: string;
  body: string;
  mine: boolean;
};

const chatRooms: ChatRoom[] = [
  {
    id: "hr-onboarding",
    name: "인사팀 인증 안내",
    preview: "사용자 상태 인증이 완료되었습니다. 계정 정보를 확인하세요.",
    status: "인사팀 시스템",
    unread: 1,
  },
];

const messagesByRoom: Record<ChatRoom["id"], ChatMessage[]> = {
  "hr-onboarding": [
    {
      id: 1,
      author: "인사팀 시스템",
      body: "사용자 인증 상태: 인증됨\n\n이름: 성선아\n사원번호: 001201-00-021224\n아이디: aegis-0123\n비밀번호: [검열됨]\n\n이지스 인프라스트럭쳐 원격 운영 관리 및 지원 담당자용 계정이 활성화되었습니다. 초기 비밀번호는 직원 본인의 생년월일 6자리로 설정되어 있습니다.",
      mine: false,
    },
  ],
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRoomId, setActiveRoomId] = useState<ChatRoom["id"]>(
    chatRooms[0]?.id ?? "hr-onboarding",
  );

  const activeRoom = chatRooms.find((room) => room.id === activeRoomId) ?? chatRooms[0]!;
  const activeMessages = messagesByRoom[activeRoom.id];

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <div className="relative flex min-h-[4.5rem] min-w-[4.5rem] items-end justify-end">
        <button
          type="button"
          aria-label="사내 채팅 열기"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className={[
            "pointer-events-auto absolute right-0 bottom-0 flex h-16 w-16 items-center justify-center rounded-[1.6rem] border border-slate-800/10 bg-slate-950 text-white shadow-[0_18px_48px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
            "before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-to-br before:from-sky-400/30 before:via-transparent before:to-emerald-300/20 before:opacity-90",
            isOpen
              ? "translate-y-3 scale-90 opacity-0 pointer-events-none"
              : "translate-y-0 scale-100 opacity-100",
          ].join(" ")}
        >
          <MessageSquareMore className="relative size-7" />
        </button>

        <section
          aria-hidden={!isOpen}
          className={[
            "pointer-events-auto origin-bottom-right overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 text-slate-900 shadow-[0_28px_90px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-all duration-300 ease-out",
            "w-[calc(100vw-2rem)] sm:w-[42rem]",
            isOpen
              ? "max-h-[min(80vh,44rem)] translate-y-0 scale-100 opacity-100"
              : "max-h-0 translate-y-4 scale-95 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="flex h-[min(80vh,44rem)] flex-col sm:h-[42rem]">
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/75 px-5 py-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-sky-700 uppercase">
                  Employee Messenger
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-tight text-slate-950">
                  사내 문의 채널
                </h2>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsOpen(false)}
                className="rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <Minimize2 className="size-4" />
              </Button>
            </div>

            <div className="grid min-h-0 flex-1 sm:grid-cols-[17rem_minmax(0,1fr)]">
              <aside className="border-b border-slate-200/80 bg-slate-50/85 sm:border-r sm:border-b-0">
                <div className="border-b border-slate-200/80 px-4 py-3">
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      type="search"
                      placeholder="검색어를 입력하세요"
                      className="h-10 rounded-xl border-slate-200 bg-white pl-9"
                    />
                  </div>
                </div>

                <div className="max-h-56 space-y-2 overflow-y-auto p-3 sm:max-h-none sm:h-full">
                  {chatRooms.map((room) => {
                    const isActive = room.id === activeRoom.id;

                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setActiveRoomId(room.id)}
                        className={[
                          "flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition",
                          isActive
                            ? "border-sky-200 bg-white shadow-sm"
                            : "border-transparent bg-transparent hover:border-slate-200 hover:bg-white/80",
                        ].join(" ")}
                      >
                        <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                          {room.name.slice(0, 1)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="truncate text-sm font-semibold text-slate-900">
                              {room.name}
                            </span>
                            {room.unread > 0 ? (
                              <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-sky-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                                {room.unread}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-1 text-xs font-medium text-sky-700">{room.status}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-slate-500">
                            {room.preview}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              <div className="flex min-h-0 flex-1 flex-col bg-white/80">
                <div className="border-b border-slate-200/80 px-5 py-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                    Active Channel
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                        {activeRoom.name}
                      </h3>
                      <p className="text-sm text-slate-500">{activeRoom.status} 자동 발신</p>
                    </div>

                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      연결 정상
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.96))] px-5 py-5">
                  {activeMessages.map((message) => (
                    <div
                      key={message.id}
                      className={message.mine ? "flex justify-end" : "flex justify-start"}
                    >
                      <div
                        className={[
                          "max-w-[85%] rounded-[1.35rem] px-4 py-3 text-sm leading-6 shadow-sm",
                          message.mine
                            ? "rounded-br-md bg-slate-950 text-white"
                            : "rounded-bl-md border border-slate-200 bg-white text-slate-700",
                        ].join(" ")}
                      >
                        <p className="mb-1 text-[11px] font-semibold tracking-[0.18em] uppercase opacity-70">
                          {message.author}
                        </p>
                        <p className="whitespace-pre-line">{message.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200/80 bg-white/90 px-4 py-4">
                  <form className="flex items-end gap-3">
                    <div className="flex-1">
                      <label htmlFor="chat-message" className="sr-only">
                        메시지 입력
                      </label>
                      <Input
                        id="chat-message"
                        type="text"
                        placeholder="메시지를 입력하세요"
                        className="h-11 rounded-2xl border-slate-200 bg-slate-50"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="icon"
                      className="size-11 rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-100 hover:bg-sky-500"
                    >
                      <SendHorizontal className="size-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
