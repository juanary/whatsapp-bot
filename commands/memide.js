module.exports = {
    name: 'memide',
    description: 'Dice cuánto le mide el pene al que envía el comando',
    execute(message, args, client) {
        const size = Math.floor(Math.random() * 16) + 5;
        message.reply(`Según mis cálculos, tu pito mide ${size} cm.`);
    },
};