const setting = async (m, { conn, command, cli, text }) => {
  const user = m.quoted || m.mentionedJid?.[0];
  const channel = cli.config.info.channel;

  const user_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> رد على رسالته الاول او منشنه
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const kick_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم الطرد يالشيخ وحذفت رسالته كمان
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const delete_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> خلاص كذا تم حذف رسالته رسالته كمان يالشيخ عشان الرساله لا تظهر
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const promote_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> خلاص كذا تم يالشيخ خليته مشرف
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const demote_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> خلاص كذا تم يالشيخ شلت اشرافه
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const add_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> خلاص كذا تم اضافته يالشيخ
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const not_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> اكتب الرقم بعد الامر مثل .ضيف 966569688912
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;

  // kick
  if (command === "طرد") {
    if (!user) {
      await conn.sendMessage(
        m.chat,
        {
          text: user_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    }
    await conn.groupParticipantsUpdate(m.chat, [user.sender || user], "remove");
    await user.delete();

    await conn.sendMessage(
      m.chat,
      {
        text: kick_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // delete
  else if (command === "حذف") {
    if (!user) {
      await conn.sendMessage(
        m.chat,
        {
          text: user_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    }
    user.delete();
    m.delete();
    await conn.sendMessage(
      m.chat,
      {
        text: delete_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // promote
  else if (command === "رفع") {
    if (!user) {
      await conn.sendMessage(
        m.chat,
        {
          text: user_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    }
    await m.promote(user.sender);
    await conn.sendMessage(
      m.chat,
      {
        text: promote_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // demote
  else if (command === "خفض") {
    if (!user) {
      await conn.sendMessage(
        m.chat,
        {
          text: user_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    }
    await m.demote(user.sender);
    await conn.sendMessage(
      m.chat,
      {
        text: demote_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // add
  else if (command === "ضيف") {
    const number = text.trim();
    const jid = number + "@s.whatsapp.net";

    if (!text) {
      await conn.sendMessage(
        m.chat,
        {
          text: not_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    } else {
      await conn.groupParticipantsUpdate(m.chat, [jid], "add");
      await conn.sendMessage(
        m.chat,
        {
          text: add_text,
          contextInfo: channel,
        },
        { quoted: m },
      );
    }
  }
};

setting.usage = ["طرد", "رفع", "خفض", "حذف", "ضيف"];
setting.command = ["طرد", "رفع", "خفض", "حذف", "ضيف"];
setting.category = ["admin"];
setting.admin = true;
setting.botAdmin = true;

export default setting;
