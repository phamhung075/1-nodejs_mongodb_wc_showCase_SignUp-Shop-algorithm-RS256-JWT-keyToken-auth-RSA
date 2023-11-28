"use strict";

const express = require("express");
const acccessController = require("../../controllers/access.controller");
const router = express.Router();

//signUp
router.post("/shop/signup", acccessController.signUp);

module.exports = router;
