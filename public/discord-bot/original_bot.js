/*
Mivel a botot kliensként alkalmazzuk a kód kompatibilitását browserify program segítségével alakítjuk át,
aminek a generált fájl mérete túllépi a nézhető korlátot.
*/

require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();
/*a bot Tokenje, nem kozzeteheto az interneten!*/
const TOKEN= 'ODExOTgzNDQxNjg3MDg1MDU3.YC6Igg.pWDOAL1-4ygDfTF7qfFFwzkRaYM'


bot.login(TOKEN);



bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
//establish socket communication
const sockett = io();

//handled objects
var obj;
var param;

//socket that handles the initial greetings!
sockett.on('message', message =>{

  var tbox = document.getElementById("box");
  var cont = tbox.value;

  obj = JSON.stringify(message);
});

//receives the given parameters in parame
sockett.on('parame', message =>{
  param = JSON.stringify(message);
  console.log(param);
 });

//basic string reverse function
 function reverse(s){
  return s.split("").reverse().join("");
}

// the bot answers to the given parameters with it's inverse
bot.on('message', msg => {
  if (msg.content === param) {
    msg.reply('A paramétert megkaptam!');
    msg.channel.send(reverse(param));
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
