const Discord = require("discord.js");
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (msg) => {
  console.log(`Message read from ${msg.author.username}`);
  if (
    msg.content.toLowerCase().includes("bitch") &&
    msg.author.username !== "hart-bot"
  ) {
    msg.delete();
    msg.channel.send(`No. ${msg.author.username} bad.`);
  }
});

// test token - not to be used in prod
TOKEN = "ODI5NTAzMTYyNzMzMjk3Njc0.YG5FBQ.6QChr2P-J68HwRXvQeAC-OBHN5Q";
client.login(TOKEN);
