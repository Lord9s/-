const { getStreamFromURL } = require("fb-watchman");
module.exports = {
  config: {
    name: "info",
    version: 2.0,
    author: "OtinXSandip",
    longDescription: "info about bot and owner",
    category: "ai",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const imgURL = "https://i.imgur.com/M2bZSef.jpg";
    const attachment = await global.utils.getStreamFromURL(imgURL);

    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;

    const ment = [{ id: id, tag: name }];
    const a = "𝗠𝗮𝘁𝗲𝗼𖣘𝘽𝙤𝙩࿐";
    const b = " . ";
    const c = "Jayden Smith";
const e = "Male";
    const d = "https://m.me/lordjaydenSmith.1";
const f = "ig.me/jaydenemith";
const g = "single🙂";
const h = "Need ongoing support? Type .supportgc to join our group and connect with others. Goodbye!";



    message.reply({ 
      body: `${name}, here is the information 🌝
🌸 Bot's Name: ${a}
🌸 Bot's prefix: ${b}  
🌸 Owner: ${c}
🌸 Gender: ${e}
🌸 Messenger: ${d}
🌸 Insta: ${f}
🌸 Relationship: ${g}
🌸 bot says: ${h}`,
mentions: ment,
      attachment: attachment });
  }
};
