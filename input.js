let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
    process.stdin.on('data', (key) => {
      switch (key) {
      case 'w':
      case 'W':
        conn.write('Move: up');
        break;

      case 'a':
      case 'A':
        conn.write('Move: right');
        break;

      case 's':
      case 'S':
        conn.write('Move: down');
        break;

      case 'd':
      case 'D':
        conn.write('Move: left');
        break;

      case 'q':
      case 'Q':
        conn.write('Say: MY CITY NOW');
        break;

      case 'x':
      case 'X':
        conn.write('Say: FIGHT ME LITTLE MAN');
        break;

      case '\u0003':
        conn.write('FAREWELL MORTAL')
        process.exit()
        }
      });
    }

// const input = setupInput();
// input.on("data", dataTwoELectricBoogaloo => {
//   handleUserInput(dataTwoELectricBoogaloo);
// });


module.exports = { setupInput };