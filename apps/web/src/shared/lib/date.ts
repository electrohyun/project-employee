export function formatIntranetDateLabel(date: Date) {
  const dateParts = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Seoul",
  }).formatToParts(date);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Asia/Seoul",
  }).format(date);

  const year = dateParts.find((part) => part.type === "year")?.value ?? "0000";
  const month = dateParts.find((part) => part.type === "month")?.value ?? "00";
  const day = dateParts.find((part) => part.type === "day")?.value ?? "00";
  const safeWeekday = weekday || "---";

  return `${year}. ${month}. ${day}. ${safeWeekday}`;
}
