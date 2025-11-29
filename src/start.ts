import { channels } from "./services/twitch";
import "./games/revolutionIdle";
import dotenv from "dotenv";

dotenv.config();

process.title = "Twitch Idle Game";
console.log("Starting Twitch Idle Game...");

channels.push(process.env.TWITCH_CHANNEL || "");
