const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    console.log("Name: AEG")
  });

  conn.on('connect', () => {
    console.log('Move: up');
    console.log('Move: down');
    console.log('Move: up');
    console.log('Move: left');
    console.log('Move: right');
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  

  return conn;
}

module.exports = connect;