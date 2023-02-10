const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const router = require("./routes/index");
const path = require("path");
require("dotenv").config();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT;
const versionNode = process.versions.node;

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.dirname(__dirname) + "/src/views");

app.use(router);

io.on('connection', (socket) => {
  socket.on('on-chat', data => {
    io.emit('user-chat', data)
  })
});


server.listen(port, () => {
  console.log(`server run http://localhost:${port}`);
  console.log(`With version node ${versionNode}`);
});
