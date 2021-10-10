const express = require("express");
const homeController = require("../controllers/indexController");

const router = express.Router();
router.get("/", homeController.home);

module.exports = router;
