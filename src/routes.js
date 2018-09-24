const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);

module.exports = router;

// Insomnia.rest
