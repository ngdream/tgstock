const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("TgStock\n Use the most of Telegram to securely save your files"))

module.exports = {bot}