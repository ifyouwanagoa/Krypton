const Discord = require('discord.js');
const client = new Discord.Client();

// playing
client.on('ready', () => {                           
client.user.setGame(`♥ KrypTon ♥ | use: # `,'https://www.twitch.tv/ℕ o v a Codes♥');
  });

client.on('message', message => {
              var prefix = "-" ;
  if (message.content.startsWith(prefix + "help")) {
  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
🕴_____ 🖤😎 - BotEpic - 😎🖤  _____🕴
🖤(#dc ⟿⟿⟿ Delete all channels)🖤
🖤(#dr ⟿⟿⟿⟿ Delete all roles)🖤
🖤(#serooms ⟿⟿⟿⟿ Create rooms)🖤
🖤(#tag @someone ⟿⟿⟿⟿ To see the tag)🖤
🖤(#bc ⟿⟿⟿ Brodcast all member)🖤
🖤(#servers ⟿⟿ To know the servers which the bot joined)🖤
🖤(#active ⟿⟿⟿ Verify your self)🖤
🖤(#vk ⟿⟿⟿⟿⟿ Kick from voice)🖤
🖤(#kick ⟿⟿⟿⟿⟿⟿ Kick member)🖤
🖤(#ban ⟿⟿⟿⟿⟿⟿⟿ Ban member)🖤
🖤(#role all ⟿⟿⟿⟿⟿ From All)🖤
🖤(#role humans ⟿ From All Humans)🖤
🖤(#role bots ⟿⟿⟿ From All Bots)🖤
🖤(#clear ⟿⟿⟿⟿ Delete all chat)🖤
🖤(#mvall ⟿ Move all to you voice)🖤
🖤(#hc ⟿⟿⟿⟿⟿⟿⟿ Hide channel)🖤
🖤(#sc ⟿⟿⟿⟿⟿⟿⟿ Show channel)🖤
🖤(#mc ⟿⟿⟿⟿⟿⟿⟿ Mute channel)🖤
🖤(#unmc ⟿⟿⟿⟿⟿ Unmute channel)🖤
🖤(#mute ⟿⟿⟿⟿⟿⟿ Mute member)🖤
🖤(#unmute ⟿⟿⟿⟿ Unmute member)🖤
🕴_____ 🖤😎 - BotEpic - 😎🖤  _____🕴
 `)
   message.channel.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
    if (message.content === "#serooms") {
         if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('**:x: You Dont Have Perms `MANAGE_CHANNELS`**');
       if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
	    

	    
	    
	
     message.guild.createChannel('Talk1', 'voice')
     message.guild.createChannel('Talk2', 'voice')
     message.guild.createChannel('Talk3', 'voice')
     message.guild.createChannel('Chatting', 'text')

     message.guild.createChannel('Commands', 'text')


message.channel.sendMessage('الرجاء الانتظار ريث ما يتم صناعة السيرفر')
}
});

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "hc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "sc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اظهار الشات__✅**")
              });
    }
       
});

client.on("ready", async  => { 
setInterval(function(){
client.channels.find('id', '531558171681226762').setName("♥");
client.channels.find('id', '531558171681226762').setName("♥W");
client.channels.find('id', '531558171681226762').setName("♥We");
client.channels.find('id', '531558171681226762').setName("♥Wel");
client.channels.find('id', '531558171681226762').setName("♥Welc");
client.channels.find('id', '531558171681226762').setName("♥Welco");
client.channels.find('id', '531558171681226762').setName("♥Welcom");
client.channels.find('id', '531558171681226762').setName("♥Welcome");
client.channels.find('id', '531558171681226762').setName("♥Welcome♥");
  }, 3000);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('517830247916240908').roles.find("name", "Rainbow").setColor("RANDOM");

  };
  setInterval(lol, 1000);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '-servers') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })


client.on('message', msg => {
  let prefix = '-';//البرفكس
  let mentions = msg.guild.member(msg.mentions.users.first()); 
if(msg.content.startsWith(prefix + "tag")){ // -tag @someone
  
 msg.channel.send(`**tag [${mentions}] with ID: [${mentions.user.id}]
 
 tag user is [${mentions.user.discriminator}]
 
 sender by ${msg.author}
 **`);

}

})

client.on('message',async message => {//Toxic Code
  if(message.author.bot || message.channel.type === '-bc') return;
  let args = message.content.split(' ');
  if(args[0] === `-bc`) {//Toxic Code
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Toxic Code
        g.send(args.slice(1).join(' ')).then(() => {//Toxic Code
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);//Toxic Code
        });//Toxic Code
      });//Toxic Code
    });//Toxic Code
  }
});//Toxic Code

client.login(process.env.TOKEN);
