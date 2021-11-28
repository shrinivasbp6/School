const { User, UserDetails } = require('../../models')
const GetAllUsers = () => {
    return User.findAll({
        include: [
            UserDetails
        ]
    })
}
module.exports = GetAllUsers