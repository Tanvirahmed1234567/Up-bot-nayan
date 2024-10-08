module.exports = {
config:{
  name: "download",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  credits: "Nayan",
  description: "Social Media Video Downloader",
  category: "user",
  usages: [
    "/download [Facebook video link]",
    "/download [TikTok video link]",
    "/download [YouTube video link]",
    "/download [Instagram video link]",
  ],
  cooldowns: 5,
  dependencies: {
        'nayan-media-downloader': '',
  }
},

  languages: {
    "vi": {},
        "en": {
            "urlinvalid": '-𝗨𝗻𝘀𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝘃𝗶𝗱𝗲𝗼 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺_//-🥲. Please provide a valid Facebook, TikTok, Twitter, Instagram, or YouTube video link.',
          "waitfb": '-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝘃𝗶𝗱𝗲𝗼_//-🥲. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...',
          "downfb": "-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗩𝗶𝗱𝗲𝗼 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆_//-😍",
          "waittik": '-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴  𝗧𝗶𝗸𝗧𝗼𝗸  𝘃𝗶𝗱𝗲𝗼. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁....!',
          "waitinsta": '-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝘃𝗶𝗱𝗲𝗼_//-🥲. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...',
          "downinsta": '-𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝘃𝗶𝗱𝗲𝗼 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 success_//-😍',
          "waityt": '-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝘃𝗶𝗱𝗲𝗼_//-🥲. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...',
          "waittw": '-𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗧𝘄𝗶𝘁𝘁𝗲𝗿 𝘃𝗶𝗱𝗲𝗼_//-🥲.𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...',
          "downtw": '𝗧𝘄𝗶𝘁𝘁𝗲𝗿 𝘃𝗶𝗱𝗲𝗼 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀',
          "error": '❌Error'
        }
    },

start: async function ({ nayan, events, args, lang }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const content = args.join(" ");
  const { ytdown, ndown, tikdown, twitterdown } = require("nayan-media-downloader")
  let msg = "";

  const sendWaitingMessage = async (message) => {
    const vid = (
      await axios.get(
        'https://i.imgur.com/rvreDPU.gif',
        { responseType: 'stream' }
      )
    ).data;
    return await nayan.sendMessage({ ...message }, events.threadID);
  };

  if (content.includes("https://fb.watch/") || content.includes("https://www.facebook.com")) {
    const fbnayanResponse = await ndown(content);
    console.log(fbnayanResponse)
    const fbVideoUrl = fbnayanResponse.data[0].url;
    const waitingMessage = await sendWaitingMessage({ body: lang("waitfb") });

    const fbVideoData = (await axios.get(fbVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbVideo.mp4", Buffer.from(fbVideoData, "utf-8"));

    msg = lang("downfb");

    nayan.reply(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/fbVideo.mp4"),
      },
      events.threadID
    );

    setTimeout(() => {
      nayan.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (
    content.includes("https://vt.tiktok.com/") ||
    content.includes("https://tiktok.com/") ||
    content.includes("https://www.tiktok.com")
  ) {
    const tiktoknayanResponse = await tikdown(content);
    const tiktokVideoUrl = tiktoknayanResponse.data.video;
    const tiktokTitle = tiktoknayanResponse.data.title;
    const tiktokavatar = tiktoknayanResponse.data.author.avatar;
    console.log(tiktoknayanResponse)
    const tiktokAvatar = (
      await axios.get(`${tiktokavatar}`,
        { responseType: 'stream' }
      )
    ).data;
    const waitingMessage = await sendWaitingMessage({ body: lang("waittik")});

    const tiktokVideoData = (await axios.get(tiktokVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/tiktokVideo.mp4", Buffer.from(tiktokVideoData, "utf-8"));

    msg = `《TITLE》${tiktokTitle}`;

    nayan.reply(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/tiktokVideo.mp4"),
      },
      events.threadID
    );

    setTimeout(() => {
      nayan.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (content.includes("https://instagram.com") || content.includes("https://www.instagram.com")) {
    const instagramnayanResponse = await ndown(content);
    const instagramVideoUrl = instagramnayanResponse.data[0].url;
    const waitingMessage = await sendWaitingMessage({ body: lang("waitinsta") });

    const instagramVideoData = (await axios.get(instagramVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/instagramVideo.mp4", Buffer.from(instagramVideoData, "utf-8"));

    msg = lang("downinsta");

    nayan.reply(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/instagramVideo.mp4"),
      },
      events.threadID
    );

    setTimeout(() => {
      nayan.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (content.includes("https://youtube.com/shorts/") || content.includes("https://youtu.be/")) {
    // YouTube video download logic
    const youtubenayanResponse = await ytdown(content);
    const youtubeVideoUrl = youtubenayanResponse.data.video;
    const title = youtubenayanResponse.data.title;
    const waitingMessage = await sendWaitingMessage({ body: lang("waityt") });
    const youtubeVideoData = (await axios.get(youtubeVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/youtubeVideo.mp4", Buffer.from(youtubeVideoData, "utf-8"));

    msg = `${title}`;

    nayan.reply(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/youtubeVideo.mp4"),
      },
      events.threadID
    );

    setTimeout(() => {
      nayan.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else if (content.includes("https://twitter.com/")) {
    const instagramnayanResponse = await twitterdown(content);
    const twitterVideoUrl = instagramnayanResponse.data.HD;
    const waitingMessage = await sendWaitingMessage({ body: lang("waittw") });

    const TWITTEEVideoData = (await axios.get(twitterVideoUrl, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/instagramVideo.mp4", Buffer.from(TWITTEEVideoData, "utf-8"));

    msg = lang("downtw");

    nayan.reply(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/instagramVideo.mp4"),
      },
      events.threadID
    );

    setTimeout(() => {
      nayan.unsendMessage(waitingMessage.messageID);
    }, 9000);
  } else {
    msg = lang("urlinvalid");
    nayan.reply({ body: msg }, events.threadID);
  }
}
}
