const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3000;
const cors = require("cors");

server.use(cors("*"));
server.use(middleware);
server.use(router);

server.listen(port, () => console.log("server is running"));
