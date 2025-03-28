/*
 * index.js - Punto de entrada para el botardo
 *
 * By: juan (vynoka) & nade
 * para iniciar el programa, en terminal pones: node index.js
 * gracias Dios por un día mas de vida
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

// Creamos el cliente de WhatsApp usando LocalAuth para guardar la sesión y no tener que escanear el QR cada vez
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false, // Ponelo en false si querés ver la ventana del navegador y seguir el proceso
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    }
});

// Función para cargar los archivos de eventos desde la carpeta 'events'
const loadEvents = () => {
    const eventsPath = path.join(__dirname, 'events');
    // Leemos cada archivo dentro de la carpeta de eventos
    fs.readdirSync(eventsPath).forEach(file => {
        if (file.endsWith('.js')) {
            // Requerimos el archivo de evento
            const event = require(`./events/${file}`);
            // Si el evento es de ejecución única, usamos 'once'
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                // Sino, lo configuramos para que se ejecute cada vez que ocurra
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    });
};

// funcion para cargar los comandos desde la carpeta 'commands'
const loadCommands = () => {
    client.commands = new Map();
    const commandsPath = path.join(__dirname, 'commands');
    // lee cada .js del modulo
    fs.readdirSync(commandsPath).forEach(file => {
        if (file.endsWith('.js')) {
            // se agrega y se banderea el comando en el archivo necesitado
            const command = require(`./commands/${file}`);
            client.commands.set(command.name, command);
        }
    });
};

// funciones que cargan eventos y comandos
loadEvents();
loadCommands();

// se arranca el cliente y el bot
client.initialize();

client.on('authenticated', () => {
    console.log('¡El cliente está autenticado!');
});

client.on('auth_failure', (msg) => {
    console.error('Fallo en la autenticación:', msg);
});

client.on('ready', () => {
    console.log('¡El cliente está listo!');
});

