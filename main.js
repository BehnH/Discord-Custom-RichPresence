const client = require('discord-rich-presence')('CLIENT-ID');

console.log("Logging in to client...")

client.config = require("./config.js");

console.log("Setting presence...")

client.updatePresence({
    state: client.config.state,
    largeImageKey: client.config.lImgKey,
    instance: true,
    startTimestamp: Date.now(),
});