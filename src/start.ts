import dotenv from "dotenv";
dotenv.config({ debug: false, quiet: true });
import { channels } from "./services/twitch";
// import "./games/revolutionIdle";
import "./test/spam"

process.title = "Twitch Idle Game";
console.log("Starting Twitch Idle Game...");

channels.push(process.env.TWITCH_CHANNEL || "");
