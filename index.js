const Discord = require('discord.js')
const bot = new Discord.Client()
const cfg = require('./index.json');
const prefix = ('!c');

bot.on('ready', function () {
    console.log("Je sui prêt à ètre utilisé")
    bot.user.setActivity("CaliforniaCityRP").catch(console.error)
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur CaliforniaCityRP Fivem' + member.displayName)
        console.log('${member.displayName} à rejuoind le serveur.')
    }).catch(console.error)
 })

 bot.on('message', nsg => {
     if(MSGesture.content === "Bonjour"){
     msg.reply("Heureucx de te revoir parmis nous.")
     }
     if (msg.content.match(/salut/i)){
         msg.reply("Salut")
     }
     if (msg.content === prefix + "ip"){
         msg.channel.send("188.40.16.78:30797")
         console.log("Une personne a pris l'ip du serveur.")
     }

    })
    




bot.login(cfg.token);