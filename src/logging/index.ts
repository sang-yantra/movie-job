import winston from "winston";
import { USER } from "../constants/index.js";
const { combine, timestamp, cli, json, printf, colorize, align } =
  winston.format;
const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf(
      (info) => `[${info.timestamp}] ${USER} ${info.level}: ${info.message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

const LOG_COLORS = {
  cyan: "\x1b[36m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
};

export default logger;
