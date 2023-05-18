const express = require("express");
const router = express.Router();

const { listAllEmployees } = require("../controllers/employeeController");
const userAuth = require("../middlewares/userAuth");

router.route("/listall").get(userAuth, listAllEmployees);

module.exports = router;
