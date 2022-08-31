const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541",
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
    conn.write("Name: KLy") // send to server upon connection
  })

  return conn;
};

module.exports = connect;