const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  };

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

const input = setupInput();
input.on("data", dataTwoELectricBoogaloo => {
  handleUserInput(dataTwoELectricBoogaloo);
});