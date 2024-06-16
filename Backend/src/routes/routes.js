const express = require("express");
const posts = require("../controllers/controller.js");
const router = express.Router();

router.get("/posts", posts.getPosts);
router.post("/posts", posts.createPost);
router.patch("/posts/:id");
router.delete("/posts/:id");

module.exports = router;