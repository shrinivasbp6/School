const { User, UserDetails } = require('../../models');
const calculateBodyMassIndex = require('../utils/calculateBMI');
const CreateUser = async (name, height, weight) => {
    const user = await User.findOrCreate({
        where: {
            name: name
        },
        defaults: {
            name: name
        }
    }).catch(err => console.log(err));
    const { bmi, status, message } = calculateBodyMassIndex(height, weight)
    const details = await UserDetails.create({
        height: height,
        weight,
        bmi,
        status,
        message,
        user_id: user[0].id
    }).catch(err => console.log(err));
    return { user, details }
}
module.exports = CreateUser
