const { Blog } = require('../models');

const blogData = [
    {

        "title": "This App is Unfinished",
        "blogText": "I still have to include a comment feature for blog posts.",
        "member_id": 1
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;