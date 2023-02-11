const { Telegraf, Markup } = require("telegraf")

const bot = new Telegraf(process.env.BOT_TOKEN, {
    polling: true,
    handlerTimeout: 9_000_000
  });


module.exports=bot