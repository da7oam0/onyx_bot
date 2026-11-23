const groub = async (m, { conn, command, text, cli }) => {
  const channel = cli.config.info.channel;

  const name_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم تغيير اسم الجروب يالشيخ
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const name_eror = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> اكتب الاسم بعد الامر مثل .جروب_اسم تست اسم
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const description_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم تغيير وصف القروب يالشيخ 
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const description_eror = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> اكتب الوصف بعد الامر مثل .جروب_وصف هذا هو وصف القروب الجديد
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const profile_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم تغيير صورة القروب يالشيخ
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const profile_eror = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> رد على الصورة عشان تنحط
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const mute_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم قفل القروب يالشيخ
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;
  const open_text = `~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~
> تم فتح القروب يالشيخ
~*【✧━━━✧┃• 🖤 •┃✧━━━✧】*~`;

  // groub_name
  if (command === "جروب_اسم") {
    if (!text) {
      await conn.sendMessage(
        m.chat,
        {
          text: name_eror,
          contextInfo: channel,
        },
        { quoted: m },
      );
      return;
    }

    await conn.groupUpdateSubject(m.chat, text);
    await conn.sendMessage(
      m.chat,
      {
        text: name_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // groub_ description
  else if (command === "جروب_وصف") {
    if (!text) {
      await conn.sendMessage(
        m.chat,
        {
          text: description_eror,
          contextInfo: channel,
        },
        { quoted: m },
      );
      return;
    }

    await conn.groupUpdateDescription(m.chat, text);
    await conn.sendMessage(
      m.chat,
      {
        text: description_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // groub_profile
  else if (command === "جروب_صورة") {
    const quoted = await m.quoted.download();
    if (!quoted) {
      await conn.sendMessage(
        m.chat,
        {
          text: profile_eror,
          contextInfo: channel,
        },
        { quoted: m },
      );
      return;
    }
    await conn.updateProfilePicture(m.chat, quoted);
    await conn.sendMessage(
      m.chat,
      {
        text: profile_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // groub_mute
  else if (command === "جروب_قفل") {
    await conn.groupSettingUpdate(m.chat, "announcement");
    await conn.sendMessage(
      m.chat,
      {
        text: mute_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }

  // groub_open
  else if (command === "جروب_فتح") {
    await conn.groupSettingUpdate(m.chat, "not_announcement");
    await conn.sendMessage(
      m.chat,
      {
        text: mute_text,
        contextInfo: channel,
      },
      { quoted: m },
    );
  }
};

groub.useg = ["جروب_فتح", "جروب_قفل", "جروب_وصف", "جروب_اسم", "جروب_صورة"];
groub.command = ["جروب_فتح", "جروب_قفل", "جروب_وصف", "جروب_اسم", "جروب_صورة"];
groub.category = ["admin"];
groub.admin = true;
groub.botAdmin = true;

export default groub;
