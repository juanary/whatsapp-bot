module.exports = {
    name: 'ping', 
    description: 'Responde con pong',
    execute(message, args, client) {
        message.reply('pong');
    },
};