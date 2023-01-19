const IP = '165.227.47.243';
const PORT = '50541';

const inputKeys = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  "k": "Say: lunch",
  "l": "Say: time",
  "m": "Say: yum!",
  "n": "Say: snek"
};

module.exports = {IP, PORT, inputKeys};

// if (data === "w") {
//   connection.write("Move: up");
// }
// if (data === "a") {
//   connection.write("Move: left");
// }
// if (data === "s") {
//   connection.write("Move: down");
// }
// if (data === "d") {
//   connection.write("Move: right");
// }
// if (data === "k") {
//   connection.write("Say: lunch");
// }
// if (data === "l") {
//   connection.write("Say: time");
// }