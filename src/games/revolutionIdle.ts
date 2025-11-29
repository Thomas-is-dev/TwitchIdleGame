import { client } from "../services/twitch";
import { isAppActive } from "../services/security";
import robot from "robotjs";

const gameName = "Revolution Idle.exe";

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "b" || message.toLowerCase() === "bb") {
    if (isAppActive(gameName)) {
      robot.keyTap("b");
      console.log(gameName + ` : Pressed 'b' for user ${tags.username}`);
    }
  }
});
