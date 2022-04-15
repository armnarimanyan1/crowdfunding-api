const { Sequelize } = require('sequelize');

class DatabaseConfig {

    connect() {
        console.log()
        return new Sequelize(process.env.DATABASE, process.env.MARIA_DB_USERNAME, process.env.MARIA_DB_PASSWORD, {
            host: process.env.MARIA_DB_HOST,
            dialect: process.env.DB_DIALECT,
        });
    }

    async getConnection() {
        try {
            await this.connect().authenticate();
            return 'Connection has been established successfully.'
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DatabaseConfig;
