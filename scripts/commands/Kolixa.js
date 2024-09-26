😻","bØlo gøø jan amr _//-😘"]
        var name = await Users.getNameUser(events.senderID);
        var rand = tl[Math.floor(Math.random() * tl.length)]
        return nayan.sendMessage({ 
              body: `${name}, ${rand}`, 
              mentions: [{ tag: name, id: events.senderID }] }, events.threadID, (error, info) => {
          if (error) {
            return nayan.sendMessage('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
    }

      const response = await axios.get(`http://37.27.114.136:25472/sim?type=ask&ask=${encodeURIComponent(msg)}`);
      console.log(response.data);
      const replyMessage = response.data.data.msg;

      nayan.sendMessage({ body: replyMessage }, events.threadID, (error, info) => {
        if (error) {
          return nayan.sendMessage('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
        }

        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: events.senderID,
          head: msg,
        });
      }, events.messageID);

    } catch (error) {
      console.log(error)
      nayan.sendMessage('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
  }
};
