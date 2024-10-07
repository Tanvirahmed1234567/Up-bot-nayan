const fs = require("fs");
module.exports = {
  config:{
  name: "npx6",
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
  const NAYAN = ['https://i.imgur.com/YiObdYG.mp4','https://i.imgur.com/KD9NRWV.mp4','https://i.imgur.com/jSj8oEC.mp4','https://i.imgur.com/BWAwi7Q.mp4','https://i.imgur.com/1wnwWmE.mp4','https://i.imgur.com/6vx2KC1.mp4','https://i.imgur.com/JvHsOU1.mp4','https://i.imgur.com/uSOsq3u.mp4','https://i.imgur.com/aKufQWf.mp4','https://i.imgur.com/gpsVeQ1.mp4','https://i.imgur.com/5jBriPn.mp4','https://i.imgur.com/0knfZFI.mp4','https://i.imgur.com/22jxAab.mp4','https://i.imgur.com/ZZmXJQe.mp4','https://i.imgur.com/Pe13tBu.mp4','https://i.imgur.com/ZvRnFhz.mp4','https://i.imgur.com/qWntz1A.mp4','https://i.imgur.com/yKXRVza.mp4','https://i.imgur.com/uDndWOD.mp4','https://i.imgur.com/udO88nZ.mp4','https://i.imgur.com/Qln3xxQ.mp4','https://i.imgur.com/lPRA7b8.mp4','https://i.imgur.com/opPCcM8.mp4',"https://i.imgur.com/4oOZXwL.mp4","https://i.imgur.com/OAojVWy.mp4","https://i.imgur.com/0GbL3le.mp4","https://i.imgur.com/iSHB4pX.mp4","https://i.imgur.com/dQflITc.mp4",'https://i.imgur.com/nLqdtN6.mp4','https://i.imgur.com/SZzO6AP.mp4','https://i.imgur.com/Lar4M17.mp4','https://i.imgur.com/QKQCUNv.mp4','https://i.imgur.com/FnwZ3hr.mp4','https://i.imgur.com/wQOISVq.mp4','https://i.imgur.com/aZafRUh.mp4','https://i.imgur.com/Eq0vbpH.mp4','https://i.imgur.com/5ji5edE.mp4','https://i.imgur.com/8xcGK2A.mp4','https://i.imgur.com/ZBBp7do.mp4','https://i.imgur.com/96VjXF8.mp4','https://i.imgur.com/Hz2czIS.mp4','https://i.imgur.com/h0p8Xdx.mp4','https://i.imgur.com/fztqIO8.mp4','https://i.imgur.com/1Zz9aVo.mp4','https://i.imgur.com/32DFsr8.mp4','https://i.imgur.com/ok6SloW.mp4','https://i.imgur.com/MCAwODI.mp4''https://i.imgur.com/OK7DdJL.mp4','https://i.imgur.com/0RKxzyC.mp4','https://i.imgur.com/Fl40TtV.mp4','https://i.imgur.com/r0E3tOP.mp4','https://i.imgur.com/2oUXs44.mp4','https://i.imgur.com/gjaulFD.mp4','https://i.imgur.com/D0127fR.mp4','https://i.imgur.com/rdV22l6.mp4','https://i.imgur.com/gg6Vh6x.mp4','https://i.imgur.com/naq7XwF.mp4','https://i.imgur.com/DdErHEM.mp4','https://i.imgur.com/Gee37C0.mp4',]
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🏍️")==0 || body.indexOf("🚲")==0 || body.indexOf("🚴🏻‍♀️")==0 || body.indexOf("🚗")==0 || body.indexOf("🏎️")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
    var msg = {
        body: "-•|•-𝘂 𝗮𝗿𝗲 𝗺𝗬 1𝘀𝘁 𝗲𝗺𝗼𝘁𝗶𝗼𝗻_//-😇🌺",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
