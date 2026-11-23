import { createRequire } from "node:module";
import { Misc } from "meowsab";
const require = createRequire(import.meta.url);

const fff = async (m, { cli, conn, text }) => {
  const { subs } = require("../../system/sub.js");
  if (!subs) return m.reply("نظام البوتات الفرعية غير جاهز بعد");

  let digits = m.jid?.split("@")[0]?.replace(/\D/g, "");

  if (!digits) {
    digits = text?.trim().replace(/\D/g, "");
    if (!digits)
      return m.reply("❌ يرجى إدخال الرقم. مثال: `!تنصيب 966569688912`");
  }

  if (subs.get(digits)?.connected) return m.reply(`متصل بالفعل: ${digits}`);

  const code = await subs.addBot(digits);
  if (!code) return m.reply("فشل في إنشاء رمز الربط");

  if (code.full)
    return m.reply(">❌< اكتمل عدد البوتات المسموح بتنصيبهم استنى يفصل حد");

  const sub_true = `> *🔐⤿ انسخ الكود > التلت نقاط > ربط الجهاز > ادخل الكود*
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
📱 ▻▻ الرقم: ${digits}
🔑 ▻▻ الكود: ${code}
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> *⏳↳ بعد 15 ثانيه مثلا صلاحية الكود هتنتهي اعمل الخطوات بسرعه*

By: *da7oam*`;

  await conn.buttonV3(
    m.chat,
    {
      image: cli.config.info.image[Math.floor(Math.random() * 4)],
      text: sub_true,
      buttons: [
        {
          name: "cta_copy",
          params: {
            display_text: "الكود 📋",
            copy_code: code,
          },
        },
        {
          name: "cta_url",
          params: {
            display_text: "📢",
            url: "https://whatsapp.com/channel/0029VbDNvKnK5cDC3lNo3B2o",
          },
        },
      ],
      newsletter: { jid: '120363430383116579@newsletter', name: '𝐎𝐧𝐲𝐱 𝐁𝐨𝐭' }
    },
    m,
  );

  for (let i = 0; i < 20; i++) {
    await Misc.delay(3000);
    if (subs.get(digits)?.connected) {
      return conn.sendMessage(m.chat, {
        text: `✅ تم الاتصال بنجاح: ${digits}`,
      });
    }
  }

  await conn.sendMessage(m.chat, { text: "⏱️ انتهت المهلة الزمنية" });
};

fff.command = ["تنصيب"];
fff.noSub = true;

export default fff;
