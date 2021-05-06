const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');


// New Post
router.post('/addPost', withAuth, async (req, res) => {
    console.log("HERE!", req.session);
  
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


  // DELETE Post
router.delete('/delPost/:id', withAuth, async (req, res) => {
    try {
      const postDel = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!postDel) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postDel);
      res.render("homepage");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;