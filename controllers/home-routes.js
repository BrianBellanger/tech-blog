const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');



// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
 
    const posts = dbPostsData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET one post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username'
          ]
        }
      ]
    })

    const post = dbPostData.get({ plain: true });
    console.log("Get one post" + post);
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET ALL comments for post_id
router.get('/comment/:post_id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: [
        {
          post_id: req.params.post_id
        }
      ],
      include: [
        {
          model: User,
          attributes: [
            'username'
          ]
        }
      ]
    });

    const comment = dbCommentData.get({ plain: true });
    console.log("Get all comments" + comment);
    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Route for login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});



// New Post
router.post('/addPost', withAuth, async (req, res) => {
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
router.delete('/delPost:id', withAuth, async (req, res) => {
  try {
    const postDel = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postDel) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postDel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;