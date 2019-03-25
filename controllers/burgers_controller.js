var express = require("express");
var burger = require("../models/burger");

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
  
router.post("/api/burgers", function(req, res) {
    burger.create(["name", "devoured"], [req.body.buger_name, req.body.devoured], function(res) {
        res.json({
            id: result.insertId
        });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    var cond = "id = " + req.params.id;
  
    burger.update(
        {
            devoured: req.body.devoured
        },
        cond,
        function(res) {
            if (res.changedRows === 0) {
            return res.status(404).end();
            }
        res.status(200).end();
        }
    );
  });
  
  module.exports = router;