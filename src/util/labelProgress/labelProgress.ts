import type { IDuration, ILabel } from "../../types/labelType";

function addDuration(base: Date, dur: IDuration): Date {
  const d = new Date(base);

  if (dur.years) d.setFullYear(d.getFullYear() + dur.years);
  if (dur.months) d.setMonth(d.getMonth() + dur.months);

  let ms = 0;
  if (dur.days) ms += dur.days * 24 * 60 * 60 * 1_000;
  if (dur.hours) ms += dur.hours * 60 * 60 * 1_000;
  if (dur.minutes) ms += dur.minutes * 60 * 1_000;
  if (dur.seconds) ms += dur.seconds * 1_000;

  if (ms) d.setTime(d.getTime() + ms);
  return d;
}

export function calculateLabelPositions(
  startDate: Date,
  dueDate: Date,
  labels: ILabel[]
) {
  const totalMs = dueDate.getTime() - startDate.getTime();
  let cursor = new Date(startDate);
  let accMs = 0;

  return labels.map(({ name, span }) => {
    const topPercent = (accMs / totalMs) * 100;

    const next = addDuration(cursor, span);
    const spanMs = next.getTime() - cursor.getTime();

    accMs += spanMs;
    cursor = next;

    return { name, topPercent };
  });
}

export function getCurrentLabel(
  labels: { name: string; topPercent: number }[],
  progress: number
): string | undefined {
  return labels.find((lbl) => progress <= lbl.topPercent)?.name;
}
