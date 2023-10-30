import type { Message } from "wechaty";
import { time } from "./context";

export const handleMessage = async (message: Message) => {
  if (message.date().getTime() < time.initialzedAt) {
    return;
  }
  if (message.text().startsWith("/ping")) {
    await message.say("pong");
    return;
  }
  console.log("This is the message:::", message.text());
};
