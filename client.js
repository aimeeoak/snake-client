const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.on('Successfully connected to game server');
    conn.on("Name: AEG")
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  

  return conn;
}

module.exports = connect;