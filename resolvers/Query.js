const { name } = require("faker");

const Query = {
    persons: () => {
        return [
            {
                firstname: name.firstName(),
                lastname: name.lastName()
            },
            {
                firstname: name.firstName(),
                lastname: name.lastName()
            }
        ]
    }
}

module.exports = { Query };