// const { Sequelize } = require('sequelize');
//
// class DatabaseConfig {
//
//     connect() {
//         console.log()
//         return new Sequelize(process.env.DATABASE, process.env.MARIA_DB_USERNAME, process.env.MARIA_DB_PASSWORD, {
//             host: process.env.MARIA_DB_HOST,
//             dialect: process.env.DB_DIALECT,
//         });
//     }
//
//     async getConnection() {
//         try {
//             await this.connect().authenticate();
//             return 'Connection has been established successfully.'
//         } catch (error) {
//             throw error;
//         }
//     }
// }
//
// module.exports = DatabaseConfig;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    handle: String,
    description: String,
    website: String,
    logoUri: {
      type: Object,
    },
    socials: {
        type: Object,
    },
    payButton: String,
    payDisclosure: String,
    details: {
        type: Object,
    },
    summary: {
        type: Object,
    },
    activity: {
        type: Object,
    }
});

module.exports = mongoose.model('Project', projectSchema);
