require("dotenv").config();

const { Client, Intents } = require("discord.js");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (msg) => {
  // msg.channel.send("You are awesome!");
  if (msg.content == "hi") {
    msg.channel.send("You are awesome!");
  }
});

client.login(process.env.BOT_TOKEN);
