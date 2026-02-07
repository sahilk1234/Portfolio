type LogLevel = "info" | "warn" | "error" | "success" | "debug";

const isBrowser = typeof window !== "undefined";

const ansi = {
  reset: "\x1b[0m",
  info: "\x1b[36m", // cyan
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
  success: "\x1b[32m", // green
  debug: "\x1b[35m", // magenta
};

const css = {
  info: "color:#0ea5e9;font-weight:600",
  warn: "color:#eab308;font-weight:600",
  error: "color:#ef4444;font-weight:600",
  success: "color:#22c55e;font-weight:600",
  debug: "color:#a855f7;font-weight:600",
};

const logWithLevel = (level: LogLevel, ...args: unknown[]) => {
  const label = `[${level.toUpperCase()}]`;

  if (isBrowser) {
    console.log(`%c${label}`, css[level], ...args);
    return;
  }

  console.log(`${ansi[level]}${label}${ansi.reset}`, ...args);
};

export const logger = {
  info: (...args: unknown[]) => logWithLevel("info", ...args),
  warn: (...args: unknown[]) => logWithLevel("warn", ...args),
  error: (...args: unknown[]) => logWithLevel("error", ...args),
  success: (...args: unknown[]) => logWithLevel("success", ...args),
  debug: (...args: unknown[]) => logWithLevel("debug", ...args),
};
