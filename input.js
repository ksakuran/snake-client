const { connect } = require("./client");
const { IP, PORT, inputKeys } = require("./constants");



let connection;
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  const letter = inputKeys[data.toLowerCase()];
  if (letter) {
    connection.write(letter);
  }
};



// interface for handling user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data" , handleUserInput);
  return stdin;
};


module.exports = {setupInput};