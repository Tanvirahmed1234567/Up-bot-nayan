const fs = require("fs");
module.exports = {
  config:{
  name: "npx12",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/PNaOrMW.mp4','https://i.imgur.com/2iOKU03.mp4','https://i.imgur.com/AHapas3.mp4','https://i.imgur.com/xyAlsqp.mp4','https://i.imgur.com/cSNqIxd.mp4','https://i.imgur.com/yWxbquk.mp4','https://i.imgur.com/AQLMXY7.mp4','https://i.imgur.com/bohCLcd.mp4','https://i.imgur.com/bohCLcd.mp4','https://i.imgur.com/A6Ag4XL.mp4','https://i.imgur.com/59Qs1jB.mp4','https://i.imgur.com/MTSbkik.mp4','https://i.imgur.com/ejUqctL.mp4','https://i.imgur.com/4ZvVA8x.mp4','https://i.imgur.com/HSNUxRd.mp4','https://i.imgur.com/MSI3alN.mp4','https://i.imgur.com/YP1QBp1.mp4','https://i.imgur.com/1muJHPO.mp4','https://i.imgur.com/YRa4iGq.mp4','https://i.imgur.com/gdIa4Cy.mp4','https://i.imgur.com/UlvUutg.mp4','https://i.imgur.com/RjCRjF4.mp4','https://i.imgur.com/aSEhSfg.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🥵")==0 || body.indexOf("💋")==0 || body.indexOf("🫦")==0 || body.indexOf("👅")==0 || body.indexOf("👄")==0 || body.indexOf("🔥")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: " •┈✤⋆⃝🥵লু্ঁচ্চা্ঁগু্ঁলা্ঁ সঁর্ এ্ঁনঁতে্ঁ•✤'⋆⃝💚😘 ","-•|•-𝄟⃟≛⃝🌺ভঁদ্রঁতাঁরঁ সঁমাঁজেঁ আঁমিঁ এঁকঁ অঁসঁহাঁয়ঁ🥲≛⃝💙𝄟 ❥︎❥স্ঁয়্ঁতা্ৃঁন্ঁ_//-😶👈","-•|•-⎯͢⎯⃝ 👅উ্ঁফ্ঁস্ঁv༎ ⋆⃝স্ঁর্ঁম্ঁ⋆⃝ক্ঁরে্ঁ_//-💋─•᭄",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
