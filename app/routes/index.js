const characterRoute = require("./character.routes")
module.exports = app => {
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to averroes service." });
      });
    app.use('/api/characters', characterRoute)
}
