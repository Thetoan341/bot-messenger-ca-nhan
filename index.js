const login = require("fca-unofficial");
const fs = require("fs");

const appState = JSON.parse(
  fs.readFileSync("appstate.json", "utf8")
);

login({ appState }, (err, api) => {
  if (err) return console.error(err);

  console.log("🤖 Bot Messenger chạy bằng appstate!");

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);

    if (event.type === "message") {
      if (event.body === "ping") {
        api.sendMessage("pong 🏓", event.threadID);
      }
    }
  });
});
