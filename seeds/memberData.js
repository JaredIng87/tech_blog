const { Member } = require('../models');

const memberData = [
    {
        "name": "Jared Ingersoll",
        "email": "jaredingersoll@email.com",
        "password": "password"
    }
];

const seedMember = () => Member.bulkCreate(memberData);

module.exports = seedMember;