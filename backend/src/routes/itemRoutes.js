const express = require("express");
const router = express.Router();

const { getItems, getItemsById } = require("../controllers/itemController");

// Directly pass the functions to the router.get() method
router.get("/", getItems);
router.get("/:id", getItemsById);

module.exports = router;
