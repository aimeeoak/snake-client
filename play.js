const { setupInput } = require('./setupInput');
const { connect } = require('./client');

console.log('Connecting ...');
connect();

setupInput();