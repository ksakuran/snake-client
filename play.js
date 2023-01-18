const net = require("net");
const {connect} = require("./client");
const {handleUserInput} = require("./input");

console.log("Connecting . . .");

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data" , handleUserInput);
  return stdin;
};




