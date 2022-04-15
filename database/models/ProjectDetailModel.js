// const DatabaseConfig = require("../DatabaseConfig")
//
// class ProjectDetailModel extends DatabaseConfig {
//
//     constructor() {
//         super();
//     }
//
//     async createColumn(...columns) {
//
//     }
// }
//
// module.exports = ProjectDetailModel;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('project-detail', {
    // todo make table columns
}, {
    timestamps: true,
});

console.log(User === sequelize.models.User); // true
