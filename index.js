import { Client } from "meowsab";
import { subBots, subs } from "./system/sub.js";
import "meowsab/safe";
import * as baileys from "baileys";
import notifications from "./system/notifications.js";

const client = new Client({
  plugsdir: "./plugins",
  prefix: [".", "/", "!"],
  library: [baileys],
  session_storage: {
    type: "sqlite",
    path: "./session",
  },
  login: {
    method: "pair",
    number: "966567158348",
    code: "ONYX1234",
  },
  owners: [{ jid: "966567158348@s.whatsapp.net" }],
});

let config = client.config;

config.info = {
  nameBot: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
  channel: {
    isForwarded: true,
    forwardingScore: 1,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363430383116579@newsletter",
      newsletterName: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      serverMessageId: 0,
    },
  },
  image: [
    "https://i.pinimg.com/736x/a5/d5/65/a5d565e3a6f75d9d0454358f005b399f.jpg",
    "https://i.pinimg.com/736x/d3/4f/ce/d34fcef32ac38c95ee6d748c6a956cc9.jpg",
    "https://i.pinimg.com/736x/1a/c3/ca/1ac3cad1a9145bea73fe49dde1a43fce.jpg",
    "https://i.pinimg.com/736x/5c/2e/20/5c2e202df294fdb55e9285657eb5c6dd.jpg",
  ],
};

const plugins = client.plug();
plugins.notification(notifications);

const start = async () => {
  await client.connect();
  await subBots(client);
  await subs.start();
};

start().catch((err) => {
  console.log(err.message);
});
