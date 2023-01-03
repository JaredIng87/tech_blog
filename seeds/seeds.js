const sequelize = require('../config/connection');

const seedMember = require('./memberData');
const seedBlog = require('./blogData');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMember();

  await seedBlog();
  


  process.exit(0);
};

seedAll();
