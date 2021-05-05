/*
Mivel a botot kliensként alkalmazzuk a kód kompatibilitását browserify program segítségével alakítjuk át,
aminek a generált fájl mérete túllépi a nézhető korlátot.
*/

require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();

const TOKEN= /*a bot Tokenje, nem kozzeteheto az interneten!*/


bot.login(TOKEN);



bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
//establish socket communication
const sockett = io();

var obj;
sockett.on('message', message =>{

 // outputMessage(message);
  var tbox = document.getElementById("box");
  var cont = tbox.value;
 // console.log(cont);
 // download(JSON.stringify(cont), "json-file-name.json", "text/plain");
 //obj = JSON.stringify(cont);
  obj = JSON.stringify(message);
});

/* 
function outputMessage()
{ */
//  console.log('A bot elkapta az uzenetet: ',message);
//  console.log(JSON.stringify(message));


//}
sockett.on("Hello", message =>{
  console.log(message);
 });





bot.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Há mé, milyenbe ?');
    msg.channel.send(obj);
    console.log(obj);
    

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('lol!');
    }
  }
});
