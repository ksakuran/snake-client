const net = require("net");
const {IP, PORT, inputKeys} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(`Server said: ${data}`);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server!");
  });

  conn.on('connect', () => {
    conn.write("Name: Kat");
  //setInterval(() => conn.write("Move: up"), 50);
  });
  
  return conn;
};

module.exports = {
  connect,
};
