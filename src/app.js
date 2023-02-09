require("dotenv").config()
const tgClient = require("./bot/bot").client;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./api/index");
app.use(routes.mediaRouter);
app.listen(port, () => {
    console.log("Server started... Listening on http://127.0.0.1:3000")
});

(async () => {
    tgClient.floodSleepThreshold = 300;
    try{
        await tgClient.start({
            botAuthToken: process.env.BOT_TOKEN,
        });
        tgClient.session.save();
        tgClient.floodSleepThreshold = 60;
    }
    catch (err){
        console.log("something went wrong: ",err)
    }
})();