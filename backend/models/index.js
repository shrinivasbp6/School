let config = require("../config/config")[process.env.NODE_ENV]
const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    { logging: false }
);
const db = {};

fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        console.log(path.join(__dirname, file), '===')
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize.options.logging = false;

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
