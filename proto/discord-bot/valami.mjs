import { qwe } from './proba.js';

import { Client } from 'discord.js';

function asd()
{

const bot = new Client();
/*a bot Tokenje, nem kozzeteheto az interneten!*/
const TOKEN= 'ODExOTgzNDQxNjg3MDg1MDU3.YC6Igg.I8MqfuCpgaZU3m38RmK5GwXMGoY'


bot.login(TOKEN);



bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  qwe()
});

bot.on('message', msg =>{
  if(msg.author.bot) return;
  if(msg.content.startsWith('!hello'))
  {
    //if(select0 == 'Udvozles'){
        msg.reply('Szia!'+msg.author);
    //}
  }
  
})
}

export default asd;
