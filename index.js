const Telegramium = require("./dist/index");
const bot = new Telegramium.Client();
const fs = require("fs");

bot.on("ready", async () => {
    // bot.api("getUpdates").then(console.log);
});

bot.on("message", async message => {
    // console.log(message)
    // @user, {text}
});

bot.login(/* TOKEN */);
