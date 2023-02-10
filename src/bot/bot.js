const {TelegramClient} = require("telegram");
const {StringSession} = require("telegram/sessions");
const {Telegraf} = require("telegraf");

const stringSession = new StringSession("");
const API_ID = parseInt(process.env.API_ID);
const HASH = process.env.HASH;

const client = new TelegramClient(
    stringSession,
    API_ID,
    HASH,
    {connectionRetries: 5}
);

async function startTgClient() {
    const client = new TelegramClient(
        stringSession,
        API_ID,
        HASH,
        {connectionRetries: 5}
    );
    await client.start({
        botAuthToken: process.env.BOT_TOKEN,
    });
    client.session.save();
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hey, my name is TgStock\n" +
    "The only cloud storage you'll need from now. \n" +
    " Save an unlimited amount of files here, freely and securely.\n" +
    "Accessible ♻️ - Secure 🔐 - Simple 🪄"))

module.exports = {client, bot, startTgClient}