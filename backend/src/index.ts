import * as http from "http";
import App from "./app";
import { Logger } from "./conf/logger.config";
require("dotenv").config();

const port = process.env.BACKEND_PORT || 3080;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new Logger();

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
  logger.info(`Listening on ${bind}`, null);
});

module.exports = App;
