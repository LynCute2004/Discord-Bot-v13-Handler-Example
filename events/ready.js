const client = require("discord.js");

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    client.user.setActivity(`Coding you!`,{type : "STREAMING", url : "https://github.com/LynCute2004/"});
})
