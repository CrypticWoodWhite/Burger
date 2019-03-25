const express = require("express");
const burger = require("../models/burger");

const router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
  
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["name", "devoured"], [req.body.buger_name, req.body.devoured], function(res) {
        res.json({
            id: result.insertId
        });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    let cond = "id = " + req.params.id;
  
    burger.updateOne(
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