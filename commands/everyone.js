module.exports = {
    name: 'everyone', 
    description: 'Menciona a todos los miembros del grupo',
    async execute(message, args, client) {
        const chat = await message.getChat();

        if (!chat.isGroup) {
            return message.reply('Este comando solo funciona en chats grupales.');
        }

        let mentions = [];
        for (const participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            mentions.push(contact);
        }

        let text = 'Ping a todos: ';
        mentions.forEach(contact => {
            text += `@${contact.pushname || contact.number} `;
        });

        message.reply(text, { mentions });
    },
};
