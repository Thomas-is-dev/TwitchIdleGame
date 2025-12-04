import { client } from "../services/twitch";
import { isAppActive } from "../services/security";
import robot from "robotjs";

const gameName = "Revolution Idle.exe";

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (
    process.env.ACTION &&
    (message.toLowerCase() === process.env.ACTION ||
      message.toLowerCase() === process.env.ACTION + process.env.ACTION)
  ) {
    if (isAppActive(gameName)) {
      robot.keyTap("b");
      console.log(gameName + ` : Pressed 'b' for user ${tags.username}`);
    }
  }
});
