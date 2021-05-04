const { Post } = require('../models');

const postData = [
  {
    name: 'Post Number 1',
    description: '-- Post bla bla bla',
    user_id: 1
  },
  {
    name: 'Post Number 2',
    description: '-- Post na na na a na',
    user_id: 2
  },
  {
    name: 'Post Number 3',
    description: '-- Post nonsense here',
    user_id: 1
  },
  {
    name: 'Post Number 4',
    description: '-- Post achoooo!',
    user_id: 2
  },
];

const seedPost = () => Post.bulkCreate (postData);

module.exports = seedPost;
