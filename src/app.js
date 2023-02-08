require("dotenv").config()
const bot = require("./bot/bot").bot
const express = require("express")
const app = express();
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server started... Listening on http://127.0.0.1:3000")
})
bot.launch().then(()=>null).catch((err)=>{
    console.log(`An error occurred... ${err.toString()}`)
})