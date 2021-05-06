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
        },
        {
          model: Comment,
          include: [User]
        }
      ]
    })

  //  console.log('dbPostData', dbPostData)

    const post = dbPostData.get({plain: true});

    console.log('Get ONE post', post);

    //const post = dbPostData.get({ plain: true });
   // console.log("Get one post" + post);
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

router.get('/addPost', withAuth, async (req, res) => {
  res.render('addpost')
})






module.exports = router;