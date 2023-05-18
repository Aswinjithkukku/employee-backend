const express = require("express");
const router = express.Router();

const {
  doSignup,
  doLogin,
  getUserAccount,
} = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");

router.route("/signup").post(doSignup);
router.route("/login").post(doLogin);
router.route("/my-account").get(userAuth, getUserAccount);

module.exports = router;
