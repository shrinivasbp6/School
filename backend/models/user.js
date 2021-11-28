module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        name: {
            type: Sequelize.STRING
        },
    });
    User.associate = ({ UserDetails }) => {
        User.hasMany(UserDetails, { foreignKey: 'user_id' })
    }

    return User;
};