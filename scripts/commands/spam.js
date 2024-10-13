module.exports.config = {
name: "spam",
  version: "",
  permssion: 2,
  credits: "Nayan",
  description: "",
  category: "spam",
  usages: "[msg] [amount]",
  prefix: true,
  cooldowns: 5,
  dependencies: "",
};

module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["61550669852479","61566493245098"];
   if (!permission.includes(event.senderID))
   return api.sendMessage("-😡তু্ঁমা্ঁর্ঁ না্ঁনি্ঁর্ঁ সা্ঁও্ঁও্ঁয়া্ঁ__//-🥵💔", event.threadID, event.messageID);
  if (args.length !== 2) {
    api.sendMessage(`Invalid number of arguments. Usage: ${global.config.PREFIX}spam [msg] [amount]`, event.threadID);
    return;
  }
  var { threadID, messageID } = event;
  var k = function (k) { api.sendMessage(k, threadID)};

  const msg = args[0];
  const count = args[1];

  //*vonglap

for (i = 0; i < `${count}`; i++) {
 k(`${msg}`);
}

}
