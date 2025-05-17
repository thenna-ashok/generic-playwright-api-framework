import pino from "pino";
import PinoHttp from "pino-http";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      destination: 1,
      colorize: true,
      levelfirst: true,
      messageFormat: "{msg}",
      customLevels: {
        trace: 10,
        debug: 20,
        info: 30,
        warn: 40,
        error: 50,
        fatal: 60,
        silent: 70,
      },
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
      customcolors: {
        trace: "blue",
        debug: "green",
        info: "white",
        warn: "yellow",
        error: "red",
        fatal: "magenta",
        silent: "grey",
      },
    },
  },
});
const loggerHttp = PinoHttp({
  logger,
  customLogLevel: (res, err) => {
    if (res.statusCode && res.statusCode >= 400 && res.statusCode < 500)
      return "warn";
    if ((res.statusCode && res.statusCode > 500) || err) return "error";
    return "info";
  },
});
export { logger, loggerHttp };
