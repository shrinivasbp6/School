require('dotenv').config();

module.exports = {
    "dev": {
        username: "root",
        password: "root",
        database: "school_dev",
        host: process.env.DB_HOST,
        dialect: "postgres",
    },
    "dev-shri": {
        username: "root",
        password: "root",
        database: "school_dev",
        host: process.env.DB_HOST,
        dialect: "postgres",
    },
    "prod": {
        username: "khhhudhbpstuon",
        password: "059cd404e2bbfc2eb779ad0495fb22936090cab1a4bdd18fe3e781a920771c0a",
        database: "d1f4i6kkdufvhr",
        host: 'ec2-3-210-12-0.compute-1.amazonaws.com',
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
};
