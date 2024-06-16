const posts = require("../models/model.js");

class PostsControllers {
  constructor() {}

  getPosts = async (req, res) => {
    try {
      const response = await posts.queryGetPosts();

      res.json(response);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  createPost = async (req, res) => {
    try {

      const response = await posts.queryCreatePosts(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.json({
        error: error,
      });
    }
  };


  updatePostsById = async (req, res) => {};

  deletePostById = async (req, res) => {};
}

module.exports = new PostsControllers();