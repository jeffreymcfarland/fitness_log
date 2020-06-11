const path = require("path")
const router = require("express").Router();

// ROUTE TO exercise.html
router.get("/", function(req, res) {
    res.sendFile(path.resolve("public/index.html"));
});

// ROUTE TO exercise.html
router.get("/exercise", function(req, res) {
    res.sendFile(path.resolve("public/exercise.html"));
});

// ROUTE TO stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.resolve("public/stats.html"));
});

module.exports = router;