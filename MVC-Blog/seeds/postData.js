const { Post } = require('../models');

const postData = [
    {
        title: "First post on board",
        content: "Welcome to the tech board!",
        userId: 1
    },
    {
        title: "OP made a terrible website",
        content: "Could this site be any worse? This looks like it was made in the 90s",
        userId: 2
    },
    {
        title: "Allowed to do crimes on this board?",
        content: "The Industrial Revolution and its consequences have been a disaster for the human race.",
        userId: 3
    },
    {
        title: "Ban this weirdo",
        content: "Only if OP could actually mannage a website.",
        userId: 2
    },
    {
        title: "How do i ban????",
        content: "Criminal on my board? I dont think so.",
        userId: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;