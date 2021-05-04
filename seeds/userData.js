const { User } = require('../models');

const userData = [
  {
    username: 'BrianBellanger',
    email: 'b@me.com',
    password: '$2b$10$O5fpKawwfTfBRHFIHslG9.Ijn8wa/QrMcMAb22IN4B8rfRc1z5rPm'
  },
  {
    username: 'TomTango',
    email: 't@me.com',
    password: '$2b$10$F/400iQxMeEE9zUW/1EC0.p4uBxRd1EY2athNy99Ys2Yiumj/nq2a'
  }
];

const seedUser = () => User.bulkCreate (userData);

module.exports = seedUser;