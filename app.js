
const http = require("http");
const route = require("./Routes/route")

const Server = http.createServer(route);

Server.listen(3000);