const net = require("net");

const client = new net.Socket();

// Conetar a un servidor
// al cliente necsesitamos conectarlo a algún lado.
// connect va a hacer una función flcha de qué es lo que quiero hacer cuando esté conectado
client.connect(5000, '127.0.0.1', () => {
    console.log("Conexión exitosa");
});

// vamos a usar on para definir eventos

// Evento: on close (si la conexión se cierra) hacemos lo siguiente
client.on('close', () => {
    console.log("Conexión terminada");
});

// Evento: on data (qué es lo que pasa si recibimos información)
client.on('data', (data) => {
    // Convert received data to a string and log it
    console.log(data.toString());
});

// Evento: info recibida desde terminal
process.stdin.on('data', (data) => {
    // Enviar la información ingresada a servidor
    client.write(data.toString());
});
