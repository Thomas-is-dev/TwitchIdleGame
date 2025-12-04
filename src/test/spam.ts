import robot from "robotjs";
import { isAppActive } from "../services/security";

const gameName = "Revolution Idle.exe";

setInterval(() => {
  if (isAppActive(gameName)) {
    robot.keyTap("b");
  }
}, 300);
