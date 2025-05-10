class RootController {
  home(req, res) {
    res.send("Hello, World!");
  }
}

module.exports = new RootController();
