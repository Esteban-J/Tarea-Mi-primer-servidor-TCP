const net = require("net");

// Crear un servidor TCP
// createServer nos permite crear un servidor TCP
// createServer recibe una función anónima a la que se le inyectará un objeto de conexión
// en "con" (inyección de dependencias)
const server = net.createServer((con) => {
    // TCP es bidireccional, con write vamoas a escribir en el túnel y todos los clientes
    // que estén conectados a mi van a recibir lo que yo mande en ese write
    con.write("Servidor iniciado correctamente\n"); // 
    console.log("Recibí una conexión remota");

    // Función para transmitir el mensaje a todos las conexiones exepto al emisor
    function broadcast(message, sender) {
        clients.forEach((client) => {
            if (client !== sender) {
                client.write(message);
            }
        });
    }

    clients.push(con);

    // Evento: datos recividos del cliente
    con.on('data', (data) => {
        const message = data.toString();
        console.log(`Mensaje recibido: ${message}`);
        broadcast(`${con.remoteAddress}:${con.remotePort} dice: ${message}`, con);
    });

    // Evento: se desconecta
    con.on('close', () => {
        console.log('Cliente desconectado');
        // Remover a los clientes desconectados del array "clients"
        const index = clients.indexOf(con);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });

    //Pipe es una función que nos permite regresar la conexión y liberarla para que ya no
    //se pueda escribir. Además se hace el envio de información de stream de datos
    //(el write)
    con.pipe(con);
});

const clients = [];

// Le decimos que va a escuchar por el puerto 5000 y el ip 127.0.0.1
server.listen(5000, '127.0.0.1', () => {
    console.log("Servidor escuchando en el puerto 5000");
});

// Nota comprensión extra
// una funión anónima es como una variable. El código que está adentro de la función
// anónima de createServer se almacena. No se ejecuta. La línea que realmente se ejecuta
// es server.listen. El servidor que se creó con el método createServer se queda escuchando
// por una conexión, y es hasta que alguien se conecta cuando lo que está adentro de la
// funión anónima (lo que se almacenó dentro de la variable) se ejecuta.
// Cada vez que hay una conexión se ejecuta la función anónima.


