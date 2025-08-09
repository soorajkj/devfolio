"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimeComponent() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tz = "Etc/GMT+12";
    setTime(dayjs().tz(tz).format("HH:mm [(UTC] Z[)]"));
    const interval = setInterval(() => {
      setTime(dayjs().tz(tz).format("HH:mm [(UTC] Z[)]"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return <span>{time}</span>;
}
