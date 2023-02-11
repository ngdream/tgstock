
require("dotenv").config()
const { Telegraf, Markup } = require("telegraf")
const locales = require("./locales")

//create a new bot
const bot = new Telegraf(process.env.BOT_TOKEN,{
    polling: true,
    handlerTimeout: 9_000_000
  });

  
  const startmakup = Markup.inlineKeyboard([
    Markup.button.url("contribute to the project", "https://github.com/jotterkain/tgstock/"),

]);


//handle start command
bot.start(ctx => {
    try {
    console.log(ctx)
      return ctx.replyWithMarkdown(locales["start"][ctx.from.language_code],startmakup)
    } catch (e) {
      console.error("error in start action:", e)
        return ctx.reply("Error occured")  
    }
})

bot.on("channel_post", ctx =>
{
  if (process.env.NODE_ENV == 'development')
  console.log(`${ctx.from.first_name} ${ctx.from.last_name} ${ctx.from.language_code}`)
else
    console.log(ctx)
  if (ctx.chat.id == -1001815359648)
  {
      bot.telegram.sendMessage(1367774583,"nouveau document envoyé sur tgstock")
    }
 

})



// handle help command
bot.help(ctx => {

    try {
    
        return ctx.replyWithMarkdown(locales["help"][ctx.from.language_code])
    } catch (e) {
      console.error("error in start action:", e)
        return ctx.reply("Error occured")
        
    }
});

//handle donate command
bot.command("signup", ctx =>
{
    try {
 
        return ctx.replyWithMarkdown(locales["donate"][ctx.from.language_code],connectmakup)
    } catch (e) {
      console.error("error in start action:", e)
        return ctx.reply("Error occured")
        
    }
})

//handle donate command
bot.command("donate", ctx =>
{
    try {
    
        return ctx.replyWithMarkdown(locales["donate"][ctx.from.language_code])
    } catch (e) {
      console.error("error in start action:", e)
        return ctx.reply("Error occured")
        
    }
})


//handle share command
bot.command("upload", async (ctx) => {
 
  if (process.env.NODE_ENV == 'development')
    console.log(`${ctx.from.first_name} ${ctx.from.last_name} ${ctx.from.language_code}`)
  else
  console.log(ctx)

 

}) 


//handle download command
bot.command("download", async (ctx) => {
 
  if (process.env.NODE_ENV == 'development')
    console.log(`${ctx.from.first_name} ${ctx.from.last_name} ${ctx.from.language_code}`)
  else
  console.log(ctx)

 

}) 



//handle download command
bot.command("delete", async (ctx) => {
 
  if (process.env.NODE_ENV == 'development')
    console.log(`${ctx.from.first_name} ${ctx.from.last_name} ${ctx.from.language_code}`)
  else
  console.log(ctx)


}) 



//start bot
if (process.env.NODE_ENV == 'development')
{
  //start webhook if we are in production
  console.log('bot launched on production')
  exports.handler = async event => {
    try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "connection done" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "" }
    }
  }
    }

else
{
    //start polling if we are in development
   bot.launch().then(console.log("bot launched"))
}

