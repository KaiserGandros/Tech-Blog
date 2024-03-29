const seedComments = require('./commentData');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
    process.exit(0);
  };

  seedAll();
