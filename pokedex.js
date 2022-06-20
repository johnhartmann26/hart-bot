const Discord = require("discord.js");
const client = new Discord.Client();
import fetch from "node-fetch";

let dex = [];

// test token - not to be used in prod
TOKEN = "ODI5NTAzMTYyNzMzMjk3Njc0.YG5FBQ.6QChr2P-J68HwRXvQeAC-OBHN5Q";
client.login(TOKEN);

async function fetchDex(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await response.json();
  return pokemon;
}

for (let i = 1; i < 152; i++) {
  fetchDex(i).then((pokemon) => {
    let pokedexEntry = pokemon;
    dex.push(pokedexEntry);
    dex.sort((a, b) => {
      return a.id - b.id;
    });
  });
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (
    whitelisted_users.includes(msg.author.username) &&
    msg.content > 0 &&
    msg.content < 152
  ) {
    msg.reply(
      `call that ${
        dex[msg.content - 1].name.charAt(0).toUpperCase() +
        dex[msg.content - 1].name.slice(1)
      } (ID: ${dex[msg.content - 1].id})`
    );
  }
  msg.react("817517997890469900");
});
