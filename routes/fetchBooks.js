const express = require("express");
const router = express.Router();
const testActions = require("../actions/test");

router.get(
  "/",
  testActions.fetchBooks
);

module.exports = router;
