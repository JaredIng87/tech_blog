const { Blog } = require('../models');

const blogData = [
    {

        "title": "Korinna Blend",
        "blogText": "Bold blend of Mexican Coatepec, Costa Rican and French Colombian beans.",
        "member_id": 1
    },
    {
        "title": "Marissa Blend",
        "blogText": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "member_id" : 1 
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;