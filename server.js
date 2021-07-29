const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3000;
const cors = require("cors");

server.use(cors({ allowedHeaders: "*", allowOrigins: "*" }));

// server.use(
//   cors({
//     origin: true,
//     credentials: true,
//     preflightContinue: false,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   })
// );
// server.options("*", cors("*"));
server.use(middleware);
server.use(router);

server.listen(port, () => console.log("server is running"));
