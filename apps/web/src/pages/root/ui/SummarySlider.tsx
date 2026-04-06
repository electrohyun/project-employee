"use client";

import {
  BadgeAlert,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

import type { SummarySlide } from "../model/types";

const iconMap = {
  shield: ShieldCheck,
  alert: BadgeAlert,
  inquiry: CircleAlert,
} as const;

interface SummarySliderProps {
  slides: readonly SummarySlide[];
}

export function SummarySlider({ slides }: SummarySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const firstSlide = slides[0];

  if (!firstSlide) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSlide = slides[currentIndex] ?? firstSlide;
  const Icon: LucideIcon = iconMap[currentSlide.icon];

  return (
    <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50/85 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            {currentSlide.title}
          </p>
          <div className={`mt-3 flex items-center gap-2 text-sm font-medium ${currentSlide.tone}`}>
            <Icon className="size-4" />
            {currentSlide.value}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/70" />
              <span className="relative size-2 rounded-full bg-sky-500" />
            </span>
            자동 갱신 중
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="이전 요약 보기"
            onClick={handlePrev}
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="다음 요약 보기"
            onClick={handleNext}
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`${slide.title} 보기`}
            aria-pressed={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition ${
              currentIndex === index ? "w-8 bg-sky-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
