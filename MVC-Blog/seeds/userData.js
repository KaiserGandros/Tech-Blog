const { User } = require('../models');

const userData = [
    {
        username: "gandros",
        password: "Orbitalstriker"
    },
    {
        username: "mark",
        password: "Mormanlover87"
    },
    {
        username: "ranger",
        password: "Furrybloke2"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;