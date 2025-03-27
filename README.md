# 🤖 WhatsApp Group Bot

A modular and customizable WhatsApp bot for group chats, built with [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). This bot can respond to commands, moderate conversations, and interact with external APIs or databases.

---

## 🚀 Features

- ✅ Command handling system (`!help`, `!ping`, etc.)
- 🧠 Auto-response triggers
- 👮 Group moderation tools (bad word filter, spam detector)
- 🖼️ Send images, stickers, audio, or documents
- 🔧 Easily extendable with custom features

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/juanary/whatsapp-group-bot.git
cd whatsapp-group-bot
```

2. **Install dependencies**

```bash

npm install
```

3. **Start the bot**

```bash
npm start
```
On first run, you'll be prompted to scan a QR code with your WhatsApp account.


## 📁 Folder Structure

```bash

/commands      -> Custom command scripts
/events        -> Listeners for WhatsApp events
/helpers       -> Utility functions
index.js       -> Entry point
```

License
GPL-3.0 License. See LICENSE for more information.

🙌 Credits
Based on whatsapp-web.js by @pedroslopez.
