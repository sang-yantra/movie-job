import { config } from "dotenv";
config();
export const VERSION = process.env.VERSION;
export const USER = process.env.USER;
export const BASE_URL = process.env.BASE_URL;
export const CONNECTION_STRING = process.env.CONNECTION_STRING;
