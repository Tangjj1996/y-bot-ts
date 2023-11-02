import type { Message } from "wechaty";
import type { WechatyInterface } from "wechaty/impls";
import { time } from "./context.js";
import { decodeText, isXmlMessage, parseXML } from "./utils.js";
import { handleXMLMsg } from "./handle.js";

export const isNoNeedResponse = (msg: Message, bot: WechatyInterface) => {
  // 过滤自身消息
  if (msg.talker().self()) {
    return true;
  }
  // 过滤除文本以外的消息
  if (msg.type() !== bot.Message.Type.Text) {
    return true;
  }
};

export const handleMessage = async (
  message: Message,
  bot: WechatyInterface,
) => {
  if (message.date().getTime() < time.initialzedAt) {
    return;
  }
  const msgText = decodeText(message.text());
  const room = message.room();
  const contact = message.from();
  if (room) {
    const topic = await room.topic();
    console.log(`Room: ${topic} Contact: ${contact?.name()} Text: ${msgText}`);
  } else {
    console.log(`Contact: ${contact?.name()} Text: ${msgText}`);
  }
  if (msgText.toLowerCase().startsWith("/ping")) {
    await message.say("pong");
    return;
  }
  if (isNoNeedResponse(message, bot)) {
    return;
  }
  if (isXmlMessage(msgText)) {
    await handleXMLMsg(await parseXML(msgText));
  }
  await message.say(msgText);
};
