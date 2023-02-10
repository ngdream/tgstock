require("dotenv").config()
const tg = require("./bot/bot")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server started... Listening on http://127.0.0.1:3000")
});
tg.bot.launch().then(() => {
    console.log("bot launched")
});
tg.startTgClient().then(()=>console.log("Telegram client started"));