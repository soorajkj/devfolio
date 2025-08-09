"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimeComponent() {
  const tz = "Etc/GMT+12";
  const time = dayjs().tz(tz).format("HH:mm [(UTC] Z[)]");
  return <span>{time}</span>;
}
