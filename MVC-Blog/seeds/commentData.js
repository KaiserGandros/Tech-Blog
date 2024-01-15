const { Comment } = require('../models');

const commentData = [
    {
        body: "looks good!",
        postId:1,
        userId:3
    },
    {
        body:"What do you mean this is cool!",
        postId:2,
        userId:3
    },
    {
        body:"If you dont like it you could just click off.",
        postId:2,
        userId:1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;