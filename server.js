

const Discord = require('discord.js');
var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(':memory:');

let db = new sqlite3.Database('new.db');
//db.run('CREATE TABLE actions(time text, sender text, content text, channel text, botname text)');
//db.run('DROP TABLE actions')
const bot = new Discord.Client();

const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require ('socket.io');
const { Console } = require('console');

const app = express();
const PORT = 3001 || process.env.PORT;
const server = http.createServer(app);
const io = socketio(server);

//Set the constant folder of the webpage
app.use(express.static(path.join(__dirname,'proto')));


function flood(interv, to_send)
{
  var intrvl = interv*1000
  var t_channel = bot.channels.find(channel => channel.id === '914567939984855101')
  setInterval( () =>{
    t_channel.send(to_send)
    console.log('spam')

  },intrvl);

}
function tofilter(){
  var latest_id
  var to_return =[]
  for(var key in dict)
    {
      if(dict[key] == 'Filter'){
        latest_id = key.substr(-1)
        var str = 'inp'+latest_id
        console.log(latest_id)
        to_return.push(dict[str])
      }
       // {console.log(dict[inp_key])}
      //latest_id +=1

    }
  //console.log(dict[key])
    return to_return
}
function parser2(Select_param,proba_input,dict)
{

for (var key in dict){
    if(dict[key] == Select_param){
       // {console.log(key.substr(-1),dict[key])
        latest_id = key.substr(-1)
        

        actual_trigger = 'inp'+latest_id
        act_trig = dict[actual_trigger]


        actual_inp = 'inp'+latest_id
        act_inp = dict[actual_inp]   

        if(act_inp == proba_input)
        {

            actual_field = 'field'+latest_id
            actual_channel = 'channel'+latest_id
            actual_role = 'role'+latest_id
            actual_date = 'date'+latest_id

            act_fld = dict[actual_field]
            act_chnl = dict[actual_channel]
            act_rl = dict[actual_role]
            act_dt = dict[actual_date]
           
          //  console.log(act_fld)
            return [act_fld, latest_id, act_chnl, act_rl, act_dt]


        }

        
            
    }
}


}
var select_values = ["Udvozles","Kick","Filter","Date","Clean", 'Role', 'Emoji'];
//var dataset = [];

var dict = {}

io.on('connection',socket => {
    console.log('Uj kliens!!')

    socket.emit('message','Üdv a szerveren!');

    socket.on('param',msg => {
        console.log('tovabbitottam a parametert');
        io.emit('parame',msg)
    });
    socket.on('uzi',msg =>{
        console.log(msg)
        io.emit('uzit',msg)
        console.log('kuldtem')
        dict = msg
        console.log('current_dict',dict)
        if(dict['spammsg'] !== ''){flood(dict['range_num'],dict['spammsg'])}
       // dataset = totomb(msg)
    })
});



server.listen(PORT, () => console.log('Megy a szerver',PORT))



function getFirstWord(str) {
  let spaceIndex = str.indexOf(' ');
  return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

/*fuggveny lekeri az aktulis id 2 datumjat */
function getDates(id)
{ 

  var acceptable = false 
  var datekey = 'date'+id
  var dates = dict[datekey]
  var toreturn = dates.split('-')
  const actdate =  new Date().toLocaleString();

  var date1 = Date.parse(toreturn[0])
  var date2 = Date.parse(toreturn[1])
  var act_date = Date.parse(actdate)

  if(date2 > act_date && date1 <=act_date)
    {acceptable=true}

  console.log(date1,date2,act_date)
  return acceptable

}






//const bot = new Client();
/*a bot Tokenje, nem kozzeteheto az interneten!*/
const TOKEN= 'ODExOTgzNDQxNjg3MDg1MDU3.YC6Igg.NqfUWIPWNHxDbPznJsWHL3jkbho'
role_dict = {}


bot.login(TOKEN);



bot.on('ready', () => {

  console.info(`Logged in as ${bot.user.tag}!`);
  /* SENDING MESSAGE INTERVALS*/
  /*
  //902967383868731462
  var t_channel = bot.channels.find(channel => channel.id === '902967383868731462')
  setInterval( () =>{
    t_channel.send('What am I doing with my life?')

  },5000);


  */
  /* 5 * 1000 = 5 másodperc*/
  
 // qwe()
});


/*UJ MESSAGE HANDLING STARTS HERE*/
bot.on('message', msg =>{
  //if(msg.author.bot) return;

  //console.log(msg.content) /* amit irtal ebben van benne */
  firstword = getFirstWord(msg.content)
  console.log(firstword)

  var select_values = ["Udvozles","Kick","Filter","Date","Clean", 'Role', 'Emoji','Spam','Picture','Query'];

  for (var i in select_values)
  {
    
      var udv = parser2(select_values[i],firstword,dict)
      console.log(udv)
      if(typeof udv !=='undefined'){
  
        if (typeof udv[0] !== 'undefined' && typeof udv[1] !=='undefined'){
           // console.log(udv[0],udv[1])
            var str = 'select'+udv[1]
            if (typeof udv[0] !== 'undefined')
            {
              if(udv[2] === '' || udv[2] == msg.channel.name){
               // console.log(msg.channel.name)
/*BOT NEM ERZEKELI A ROLE VALTOZASOKAT, FRISSITENI KELL ILYENKOR MANUALISAN */                                 
                var role_tomb=[]
                var role = msg.member.roles.forEach(role => console.log('with,js',role.name, role.id))
               var role = msg.member.roles.forEach(role => role_tomb.push(role.name))
               var found = false
               /* 
               @everyone 811973521633837106
              Godmode 902966003829440512
              Pleb 906581193493995530                 
               */
               for(var tmp in role_tomb)
               {
                 if(role_tomb[tmp] == udv[3])
                   {
                     found = true
                     break
                   }
               }
               console.log(role_tomb)
               
             //   console.log(role)
                
                if(udv[3] === '' || found){

                  if(udv[4] == '' || getDates(latest_id)){

                
              
             
            if(dict[str] == 'Udvozles'){
              /*[act_fld, latest_id, act_chnl, act_rl, act_dt] */
              var welcomeemoji = ':flushed:';
              //if(select0 == 'Udvozles'){
              msg.reply(udv[0]+ msg.author + ' ! ' + welcomeemoji);
              //msg.channel.send({files: ["https://i.imgflip.com/5wo7d4.jpg"]});
              //var role = msg.guild.roles.forEach(role => console.log(role.name, role.id))
              
              /* MEGADJA AZ ÜZENET KÜLDŐJÉNEK A ROLEJAIT*/
              //var role = msg.member.roles.forEach(role => console.log(role.name, role.id))

              //}
 
             }
           else if(dict[str] == 'Picture')
           {
            var url = udv[0]
           // console.log('url',url)
            msg.channel.send({files: [url]});
           }
           else if(dict[str] == 'Emoji'){
              // msg.react('🥰')
              emoji_map ={}
              emoji_map['mosolygósfej'] = '😀'
              emoji_map['szomorú'] = '😞'
              emoji_map['sírós'] = '😭'
              emoji_map['mérges'] = '😡'


               emoji_to_react = emoji_map[udv[0]]
               msg.react(emoji_to_react)
              // msg.channel.send(':dagger:')
               
           }
           else if(dict[str] == 'Date'){
             const actdate =  new Date().toLocaleString();
             msg.channel.send(actdate);
           }
           else if(dict[str] == 'Kick'){
             var member = msg.mentions.members.first();
             if(member.id == '811983441687085057'){
               msg.reply("I'm sorry "+ msg.author.username+ " ,I'm afraid I can't do that")
               return;
             }
            // console.log(member)
             msg.reply('Get kicked ' + member)
             member.kick()
           }
           //vagy a parseren kell változtatni, hogy 1 sorba többet is lehessen, csak akkor megy, ha a field üres

            /*valamit olvastam, hogy userek != memberek és csak membereknek tudunk adni rolokat ??? */

            else if(dict[str] == 'Role'){
              try{
              var mmbr = msg.mentions.members.first();
          //    var role = msg.guild.roles.cache.find(role => role.name === 'Pleb');
 //             var role = msg.member.roles.cache.find(role => role.name === 'Pleb')
              // console.log(mmbr._roles)
              role = msg.guild.roles.find(role => role.name === udv[0])
              
             // role_dict['@everyone'] = 811973521633837106
              role_dict['Godmode'] = '902966003829440512'
              role_dict['Admin'] = '917157344138379264'
              role_dict['Pleb'] = '906581193493995530'
              role_dict['Officer'] = '917157613127471125'
              //role_dict[] = ''
             // roleid= '906581193493995530'
              roleid = role_dict[udv[0]]
              if(mmbr.roles.has(roleid)){
                msg.reply(""+mmbr+"Már rendelkezik ilyen Role-al!");
                return;
              }
              mmbr.addRoles(role);
              msg.channel.send(mmbr.toString() + 'adtam ' + "<@&" + roleid + ">" + "role-t!" )
              //msg.channel.send(udv[0])
              }
              catch(error)
              {
                if(error instanceof TypeError)
                {
                  console.log(error)
                }
              }
            }
            //ez jön
            else if(dict[str] == 'Query'){
              var tmp_query = []
              let sql = 'SELECT * FROM actions';
              db.all(sql, [], (err, rows) => {
                if (err) {
                  throw err;
                }
               // msg.channel.send()
                rows.forEach((row) => {
                  tmp_query.push(row.time,row.sender,row.content,row.channel,row.botname);
                });
                msg.channel.send(tmp_query);
              });
             
            }
            else if(dict[str] == 'Clean'){
              
                
                    async function wipe() {
                      var msg_size = 100;
                      while (msg_size == 100) {
                          await msg.channel.bulkDelete(msg_size,true)
                      .then(messages => msg_size = messages.size)
                      .catch(console.error);
                      }
                     
                  }
                  wipe()
                  
                 console.log('wipe start')

                  console.log('wipe end')
                  
            }
            else if(dict[str] == 'Spam'){
                //902967383868731462
             // var spam_str = 'Spam'+latest_id
            // console.log('spam')
              var intrvl = 2000
              var t_channel = bot.channels.find(channel => channel.id === '914567939984855101')
              setInterval( () =>{
                t_channel.send(udv[0])
                console.log('spam')

              },intrvl);
              
        
            }
          }
       }
      }
    }
  }
    }
  
    
    
  }
})


bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel
     console.log('csatlakozott',newMember.nickname,/*newMember*/)
     var onj_channel = bot.channels.find(channel => channel.id === '914567939984855101');
    // onj_channel.send(dict['onjoin'])
     onj_channel.send('!role '+ newMember)
     var ranktogive = dict['onjrang']
    /*906581193493995530 pleb */
     //newMember.addRole('906581193493995530')
     

  } else if(newUserChannel === undefined){

    // User leaves a voice channel
    console.log('elment',newMember.nickname,/*newMember*/)
  }
})

function getwords(){

  var text = dict['textbox']
  try{
  var words = text.split(' ')
  }
  catch(error){
    console.log(error)
    words=0
  }
  return words

}

bot.on('message', msg =>{
  if(msg.author.bot) return;
  //console.log(lookforParam('LF-Filter'))


/*
  if(lookforParam('Filter') === undefined)
  {return}*/

    text = dict['textbox']
    warn = dict['choice-warn']
    zero = dict['choice-zero']
    var warningmessage = dict['warnmsg']
    tolerance_level = false
    if(warn === true){tolerance_level=true}else{tolerance_level=false}
    var words = getwords(text)
    console.log(words)

      for (var i = 0; i < words.length; i++) {
        if(msg.content.includes(words[i]))
        {
          
          if(tolerance_level){msg.author.send(warningmessage)}
          //if(select2 == 'Filter'){
            else{msg.reply('kick here')}
          msg.reply('Profanity Detected');
              
              return;
          //}
        }
      }
    

  
})

bot.on('message', msg =>{
  if(msg.content === '!goodbye')
  {
    msg.reply('Good Bye, I am going to sleep!')
    console.info(`${bot.user.tag}! Logged off!`);
    db.close()
    bot.destroy()

  }

});
bot.on('message', msg =>{
  if(msg.content === '!help')
  {
    msg.reply('My name is Testy2, I am here to help. If you are having trouble configuring me, please follow this link : http://localhost:3001/guide.html')
  }

});


bot.on('message', msg =>{
 // if(msg.author.bot) return;
  var record = []
 
  record[0] =  new Date().toLocaleString();
  record[1] = msg.author.username
  record[2] = msg.content
  record[3] = msg.channel.name
  record[4] = "Testy2#8475"
  db.run(`INSERT INTO actions(time, sender, content ,channel, botname) VALUES(?,?,?,?,?)`, record, function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  //const socket2 = io()
  //socket2.emit('query_res',tmp_query)
 // io.emit('query_res',tmp_query)
//  console.log(document.getElementById('range_num').value)
});

bot.on('message', msg =>{
  if(msg.content === '!query'){
  var tmp_query = []
  let sql = 'SELECT * FROM actions';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log('######',err)
      throw err;
    }
   // msg.channel.send()
    rows.forEach((row) => {
      tmp_query.push(row.time,row.sender,row.content,row.channel,row.botname);
    });
    console.log('tmp_tomb',tmp_query[0])
    msg.channel.send(tmp_query);
  });
  
}

});
/*
else if(dict[str] == 'Query'){

}*/