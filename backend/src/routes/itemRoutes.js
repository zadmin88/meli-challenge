const express = require("express");
const router = express.Router();

const { getItems, getItemsById } = require("../controllers/itemController");

router.get("/", getItems);
router.get("/:id", getItemsById);

module.exports = router;
