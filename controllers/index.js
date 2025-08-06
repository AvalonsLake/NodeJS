const awesomeFunction = (req, res) => {
  res.send("Hello World!");
  console.log("Hello World! nice to see you again");
};

const sendMessage = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

module.exports = { awesomeFunction, sendMessage };

// module.exports = { sendMessage };
