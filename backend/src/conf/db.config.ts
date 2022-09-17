import * as Mongoose from "mongoose";
import { Logger } from "./logger.config";
require("dotenv").config();

// logger for connection and disconnections of the database.
const db_logger: Logger = new Logger();

let database: Mongoose.Connection;

// Function to connect to the database if the connection is down.
export const connect = () => {
  const url = `mongodb://${process.env.MONGO_HOST || "localhost"}:${process.env.MONGO_PORT || "27017"}/prs`;
  const options: Mongoose.ConnectOptions = {
    dbName: "prs",
    autoIndex: false,
    autoCreate: false,
  };

  if (database) return;

  Mongoose.connect(url, options);

  database = Mongoose.connection;

  database?.once("open", async () => {
    db_logger.info("Connected to database", null);
  });

  database?.on("error", () => {
    db_logger.error("Error connecting to database");
  });
};

// Function to disconnect to the database if the connection is up.
export const disconnect = () => {
  if (!database) return;

  Mongoose.disconnect();

  database.once("close", async () => {
    db_logger.info("Disconnected  to database", null);
  });
};
