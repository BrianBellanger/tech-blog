const { Comment } = require('../models');

const commentData = [
  {
    body: 'Branches with pink apricot blossoms against a blue background.',
    post_id: 1,
    user_id: 1
  },
  {
    body: 'Pink cosmos flowers against a blue sky.',
    post_id: 2,
    user_id: 1
  },
  {
    body: 'Sandy beach with the blue sea and sky in the background.',
    post_id: 2,
    user_id: 1
  },
  {
    body: 'Two beach chairs under a beach umbrella on the beach.',
    post_id: 3,
    user_id: 1
  },
  {
    body: 'Sun setting in the horizon with waves lapping the shore.',
    post_id: 3,
    user_id: 2
  },
  {
    body: 'Trees with red, orange, yellow leaves reflected on a still lake.',
    post_id: 3,
    user_id: 1
  },
  {
    body: 'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    post_id: 4,
    user_id: 2
  },
  {
    body: 'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
    post_id: 4,
    user_id: 1
  },
  {
    body: 'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
    post_id: 1,
    user_id: 2
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
