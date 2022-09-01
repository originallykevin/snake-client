const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on("end", () => {
    console.log("You have died");
  });

  conn.on("connect", () => {
    console.log(`Welcome to Snek`);
  });

  conn.on("connect", () => {
    conn.write("Name: KLy"); // send to server upon connection
    // setTimeout(() => {conn.write("Move: up")}, 2050) // snek will move up upon connection
  });

  return conn;
};

module.exports = {
  connect,
};