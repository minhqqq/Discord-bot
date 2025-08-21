const { Client, GatewayIntentBits } = require("discord.js");

// Tạo client bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

// Khi bot online
client.on("ready", () => {
  console.log(`Bot đã đăng nhập với tên ${client.user.tag}`);
});

// Khi có tin nhắn
client.on("messageCreate", (message) => {
  if (message.content === "/hello") {
    message.reply("Hello 👋!");
  }
});

// Token sẽ được lấy từ biến môi trường
client.login(process.env.TOKEN);
