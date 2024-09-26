module.exports.config = {
  name: "mia", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Love", 
  usages: "text", 
  cooldowns: 5,
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/trump.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("𝐖𝐥𝐜 𝐜𝐨𝐦𝐞 𝐭𝐨 𝐏𝐔𝐛𝐆 𝐆𝐥𝐨𝐛𝐚𝐥 𝐇𝐚𝐜𝐤 𝐩𝐚𝐜𝐤𝐚𝐠𝐞:-𝙁𝙡𝙮 𝙘𝙖𝙧 𝙝𝙖𝙘𝙠-- 𝙈𝙖𝙜𝙞𝙘 𝙗𝙪𝙡𝙡𝙚𝙩 𝙝𝙖𝙘𝙠-- 𝙎𝙥𝙚𝙚𝙙 𝙝𝙖𝙘𝙠-- 𝙅𝙪𝙢𝙥 𝙝𝙖𝙘𝙠 -- 𝘼𝙞𝙢 𝙃𝙖𝙘𝙠-- 𝙡𝙖𝙣𝙙𝙞𝙣𝙜 𝙝𝙖𝙘𝙠 -- 𝙃𝙚𝙖𝙙 𝙨𝙝𝙤𝙩 𝙝𝙖𝙘𝙠-- 𝙀𝙎𝙋 𝙝𝙖𝙘𝙠...........𝙋𝙡𝙯 𝙨𝙞𝙧 𝘾𝙝𝙤𝙤𝙨𝙚 𝙮𝙤𝙪𝙧 𝙃𝙖𝙘𝙠 𝙤𝙧 𝙋𝙡𝙯 𝙄𝙣𝙩𝙚𝙧 𝙢𝙮 𝙢𝙨𝙜 𝙧𝙚𝙥𝙡𝙮 °𝙞𝙣𝙗𝙤𝙭°✅", threadID, messageID);
	let getPorn = (await axios.get(`https://i.postimg.cc/Jh86TFLn/Pics-Art-08-14-10-45-31.jpg`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "400 45px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 250;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `400 ${fontSize}px Arial, sans-serif`;
	}
	const lines = await this.wrapText(ctx, text, 1160);
	ctx.fillText(lines.join('\n'), 60,165);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}
