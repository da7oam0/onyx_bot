const notifications = async (ctx, { m, conn }) => {

  const text_onwer = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> الأمر ده للمطور بس لازم تكون مطور عشان تقدر تستخدمه
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const text_admin = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> الأمر ده للادمن بس لازم تبقا ادمن عشان تقدر تستخدمه
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const only_group = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> الأمر ده للجروبات فقط لازم تكون في جروب عشان تقدر تشغله
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const only_privet = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> الأمر ده بيشتغل في الخاص فقط روح الخاص وهيشتغل معاك
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const text_botAdmin = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> البوت مش ادمن لازم تخلي البوت ادمن عشان الامر يشتغل معاك
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
const command_false = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> البوت واقف او فيه صيانه حاليا كلم المطور قوله يشغله ولا اصبر شوية بقا
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;

  ctx.owner(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: text_onwer,
    });
  }, m);

  ctx.admin(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: text_admin,
    });
  }, m);

  ctx.botAdmin(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: text_botAdmin,
    });
  }, m);

  ctx.group(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: only_group,
    });
  }, m);

  ctx.private(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: only_privet,
    });
  }, m);

  ctx.disabled(() => {
    conn.inapp(m.chat, {
      title: "𝐎𝐧𝐲𝐱 𝐁𝐨𝐭",
      body: command_false,
    });
  }, m);
};

export default notifications;
