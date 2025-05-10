const express = require("express");
const rootController = require("../controllers/rootController.js");

class RootRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", rootController.home);
  }
}

module.exports = new RootRoutes().router;
