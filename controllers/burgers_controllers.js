var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burguers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ],[
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ burger_id: result.insertId });
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "burger_id = " + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "burger_id = " + req.params.id;
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;