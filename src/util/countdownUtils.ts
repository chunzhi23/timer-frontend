type StatusType = "PENDING" | "PROGRESSING" | "COMPLETED";

interface IGetCountdownDataReq {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;
  status: StatusType;
}

function getCountdownData(
  startDate: Date,
  endDate: Date
): IGetCountdownDataReq {
  const now = Date.now();
  const start = startDate.getTime();
  const end = endDate.getTime();
  const totalSpan = end - start;

  if (now < start) {
    const spanSec = Math.floor(totalSpan / 1000);
    const days = Math.floor(spanSec / (24 * 3600));
    const hours = Math.floor((spanSec % (24 * 3600)) / 3600);
    const minutes = Math.floor((spanSec % 3600) / 60);
    const seconds = spanSec % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
      percent: 0,
      status: "PENDING",
    };
  }

  if (end <= now) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      percent: 100,
      status: "COMPLETED",
    };
  }

  const diffMs = end - now;
  const secTotal = Math.floor(diffMs / 1000);

  const days = Math.floor(secTotal / (24 * 3600));
  const hours = Math.floor((secTotal % (24 * 3600)) / 3600);
  const minutes = Math.floor((secTotal % 3600) / 60);
  const seconds = secTotal % 60;

  const elapsedMs = now - start;
  const percent = (elapsedMs / totalSpan) * 100;

  return {
    days,
    hours,
    minutes,
    seconds,
    percent,
    status: "PROGRESSING",
  };
}

export { type StatusType, getCountdownData };
