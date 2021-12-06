export function main()
{
    function lookforParam(str)
    {
        for (var i in dataset){
            if(dataset[i][1] == str){
           // console.log(dataset[i][0])
            return dataset[i][0]
            }
    
        }
    
    }
    function totomb(obj){
      er = []
      tmp = []
      var i =1
      for (var key in obj){
    
          tmp.push(obj[key])
          console.log(tmp)
          if(i == 2)
          {            
              er.push(tmp)
              i=0;
              tmp = []
          }
          ++i;
      }
      return er;
    }
    
    require('dotenv').config();
    
    const Discord = require('discord.js');
    
    const bot = new Discord.Client();
    /*a bot Tokenje, nem kozzeteheto az interneten!*/
    const TOKEN= 'ODExOTgzNDQxNjg3MDg1MDU3.YC6Igg.I8MqfuCpgaZU3m38RmK5GwXMGoY'
    
    
    bot.login(TOKEN);
    
    
    
    bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    });
    //establish socket communication
    const sockett = io();
    
    var obj;
    var param;
    var uzi;
    
    
    
    var dataset = []
    
    
    
    sockett.on('uzit', msg =>{
    console.log('kaptam')
    uzi = msg
    console.log('from bot',uzi)
    
    
    
    dataset = totomb(uzi)
    
    
    })
    /*
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    msg.channel.send(uzi)
    
    })
    */
    //Üdvözlet szabaly
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    if(msg.content.startsWith(lookforParam('Udvozles')))
    {
      //if(select0 == 'Udvozles'){
          msg.reply('Szia!'+msg.author);
      //}
    }
    
    })
    
    //Kickszabaly
    //Testyt ne lehessen kickelni
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    if(msg.content.startsWith(lookforParam('Kick')))
    {
      var member = msg.mentions.members.first();
     // if(select1 == 'Kick'){
       // if(member )
          console.log(member) 
          msg.reply('Get Kicked'+ member);
          //member.kick() 
      //}
    }
    
    })
    // get actual date
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    if(msg.content.startsWith(lookforParam('Date')))
    {
      //if(select3 == 'Date'){
         
        const actdate =  new Date().toLocaleString();
        msg.channel.send(actdate);
      //}
    }
    
    })
    /*
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    if(msg.content.startsWith(lookforParam('Role')))
    {
    //  if(select4 == 'Role'){
        var member = msg.mentions.members.first();
        var role = msg.member.roles.cache.some(role => role.name === "Pleb");
        //if (!role) return;
        //member.roles.add('Pleb');
        member.roles.set(role)
        
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    
      //}
    }
    
    })
    */
    
    //Profanity filter
    bot.on('message', msg =>{
    if(msg.author.bot) return;
    //console.log(lookforParam('LF-Filter'))
    if(lookforParam('Filter') === undefined)
    {return}
    else
    {
      text = lookforParam('Filter')
      var str = text.split(" ");
    // var words = str.split(" ");
        for (var i = 0; i < str.length; i++) {
          if(msg.content.includes(str[i]))
          {
            //if(select2 == 'Filter'){
                msg.reply('Profanity Detected');
                return;
            //}
          }
        }
      }
    
    
    })
    
    bot.on("message", msg => {
    if (msg.content.toLowerCase() == lookforParam('Clean')) {
        async function wipe() {
          var msg_size = 100;
          while (msg_size <= 100) {
              await msg.channel.bulkDelete(msg_size,true)
          .then(messages => msg_size = messages.size)
          .catch(console.error);
          }
         
      }
      wipe()
    }
    
    });
    
    
    
    //basic string reverse function
    function reverse(s){
    return s.split("").reverse().join("");
    }
    
    // the bot answers to the given parameters with it's inverse
    bot.on('message', msg => {
    //if(msg.author.bot) return;
    if (msg.content === 'qqqq') {
      msg.reply('A paramétert megkaptam!');
      //msg.channel.send(reverse(param));
      msg.channel.send(uzi)
      //console.log(obj);
      
    
    } else if (msg.content.startsWith(lookforParam('Kick'))) {
      if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
      } else {
        //msg.reply('lol!');
        ;
      }
    }
    });
    
    
    
    
    
}
