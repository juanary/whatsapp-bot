module.exports = {
    name: "help",
    description: "todos los comandos",
    execute(message, args, client){
        let helpMessage ="Comandos disponibes:\n\n";
        
        client.commands.forEach(cmd => {
            helpMessage += `*${cmd.name}*: ${cmd.description}\n`;
        });

        message.reply(helpMessage)
    },
};