const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
conn.setEncoding("utf8");

conn.on('data', (data) => {
  console.log(`Server said: ${data}`);
});

conn.on('connect', () => {
  console.log("Successfully connected to the game server!");
});

conn.on('connect', () => {
  conn.write("Name: KSN");
  //setInterval(() => conn.write("Move: up"), 50);
});


return conn;
};

module.exports = {
  connect,
};
