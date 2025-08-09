"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useIsMounted } from "usehooks-ts";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimeComponent() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tz = "Etc/GMT+12";
    setTime(dayjs().tz(tz).format("HH:mm [(UTC] Z[)]"));
  }, []);

  if (!time) return null;

  return <span>{time}</span>;
}
