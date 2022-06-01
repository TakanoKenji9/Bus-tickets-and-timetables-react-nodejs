const TABLE_NAME = 'bus-project';
const config = {
    PORT: process.env.PORT || 5000,
    DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    COOKIE_NAME: 'USER_SESSION',
}

module.exports = config;