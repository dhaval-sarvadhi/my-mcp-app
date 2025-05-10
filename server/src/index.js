const cors = require("cors");
require("dotenv").config();
const express = require("express");
const db = require("./models");
const routes = require("./routes");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8082;
    this.configureMiddleware();
    this.configureRoutes();
  }

  configureMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  configureRoutes() {
    this.app.use("/", routes);
  }

  async connectDatabase() {
    try {
      await db.sequelize.sync();
      console.log("Database synced successfully");
    } catch (err) {
      console.error("Failed to sync database:", err);
      process.exit(1);
    }
  }

  start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on port ${this.PORT}`);
    });
  }

  async run() {
    await this.connectDatabase();
    this.start();
  }
}

const server = new Server();
server.run();
