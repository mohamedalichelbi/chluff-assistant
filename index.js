const Discord = require("discord.js");
require('dotenv').config();

const client = new Discord.Client();

const prefix = '$mishu ';

client.once('ready', () => {
    console.log('chluff-assistant is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
});

client.login(process.env.BOT_TOKEN);
