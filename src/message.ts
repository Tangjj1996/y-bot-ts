import type { Message } from "wechaty";
import { time } from "./context.js";
import { decodeText, isXmlMessage, parseXML } from "./utils.js";
import { handleXMLMsg } from "./handle.js";

export const handleMessage = async (message: Message) => {
  if (message.date().getTime() < time.initialzedAt) {
    return;
  }
  if (message.text().startsWith("/ping")) {
    await message.say("pong");
    return;
  }
  const msgText = decodeText(message.text());
  if (isXmlMessage(msgText)) {
    await handleXMLMsg(await parseXML(msgText));
  }
};
