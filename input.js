const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
}

module.exports = {handleUserInput}