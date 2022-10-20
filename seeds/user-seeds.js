const { User } = require('../models');

const userData = [
    {
        username: "P_rod",
        email: "P_rod@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt",
       email: "mathew@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "hyden",
        email: "hyden@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee",
       email: "lee@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Crob",
        email: "crob@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "sotero",
        email: "sotero@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;