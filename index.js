const login = require("fca-unofficial");

login(
  {
    email: "EMAIL_FACEBOOK",
    password: "MAT_KHAU_FACEBOOK"
  },
  (err, api) => {
    if (err) return console.error(err);

    console.log("Bot Messenger đã chạy!");

    api.listenMqtt((err, event) => {
      if (err) return console.error(err);

      if (event.type === "message") {
        if (event.body === "ping") {
          api.sendMessage("pong 🏓", event.threadID);
        }
      }
    });
  }
);
