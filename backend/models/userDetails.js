const calculateBodyMassIndex = require("../controllers/utils/calculateBMI");

module.exports = (sequelize, Sequelize) => {
    const UserDetails = sequelize.define("UserDetails", {
        user_id: {
            type: Sequelize.INTEGER
        },
        height: {
            type: Sequelize.DOUBLE
        },
        weight: {
            type: Sequelize.DOUBLE
        },
        bmi: {
            type: Sequelize.DOUBLE
        },
        message: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });
    UserDetails.associate = ({ User }) => {
        UserDetails.belongsTo(User, { foreignKey: 'user_id' })
    }

    return UserDetails;
};