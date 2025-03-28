module.exports = {
    name: 'message', 
    execute(message, client) {
        if (!message.body.startsWith('!')) return;

        const args = message.body.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) {
            message.reply(`El comando *${commandName}* no existe.`);
            return;
        }

        // Ejecutamos el comando
        const command = client.commands.get(commandName);
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error('Error al ejecutar el comando:', error);
            message.reply('Ocurrió un error al ejecutar el comando.');
        }
    },
};
