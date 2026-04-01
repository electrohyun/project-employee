import type { LucideIcon } from "lucide-react";

export type SummarySlideIcon = "shield" | "alert" | "inquiry";

export interface SummarySlide {
  title: string;
  value: string;
  icon: SummarySlideIcon;
  tone: string;
}

export interface BoardSectionItem {
  label: string;
  href: string;
}

export interface BoardSection {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  badge: string;
  badgeTone: string;
  purpose: string;
  reason: string;
  items: readonly BoardSectionItem[];
}

export interface SidebarLink {
  label: string;
  icon: LucideIcon;
  active: boolean;
  href: string;
}

export interface IncidentFeedItem {
  title: string;
  meta: string;
  tone: string;
}
