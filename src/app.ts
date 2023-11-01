import { WechatyBuilder } from "wechaty";
import QRCode from "qrcode";
import { handleMessage } from "./message.js";

const bot = WechatyBuilder.build({
  name: "wechat-assistant", // generate xxxx.memory-card.json and save login data for the next login
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
  },
});

bot
  .on("scan", async (qrcode, status) => {
    console.log(
      `Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(
        qrcode,
      )}`,
    );
    console.log(
      await QRCode.toString(qrcode, { type: "terminal", small: true }),
    );
  })
  .on("login", (user) => {
    console.log(`User ${user} logged in`);
  })
  .on("message", handleMessage);
await bot.start();
