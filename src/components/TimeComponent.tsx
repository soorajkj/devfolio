"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useIsMounted } from "usehooks-ts";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimeComponent() {
  const isMounted = useIsMounted();

  const tz = "Etc/GMT+12";
  const time = dayjs().tz(tz).format("HH:mm [(UTC] Z[)]");

  if (!isMounted) return null;

  return <span>{time}</span>;
}
