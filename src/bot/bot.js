const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const stringSession = new StringSession("");
const API_ID = parseInt(process.env.API_ID);
const HASH = process.env.HASH;

const client = new TelegramClient(
    stringSession,
    API_ID,
    HASH,
    { connectionRetries: 5 }
);

module.exports = { client }