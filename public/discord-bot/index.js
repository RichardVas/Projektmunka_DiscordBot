

require('dotenv').config();


const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;


bot.login(TOKEN);



bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
//establish socket communication
/*
const sockett = io();
sockett.on('message',message =>{
  console.log('MUKODIK A SOCKET');

});
*/

bot.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Há mé, milyenbe ?');
    msg.channel.send('Há mé, milyenbe ?');
    

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('lol!');
    }
  }
});
