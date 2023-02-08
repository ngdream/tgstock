const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Hey, my name is TgStock\nThe only cloud storage you'll need from now. \n Save an unlimited amount of files here, freely and securely.\n" +
    "Accessible ♻️ - Secure 🔐 - Simple 🪄"))
module.exports = {bot}