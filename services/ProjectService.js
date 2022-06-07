const BaseService = require("./BaseService")
const Project = require('../database/projectModel')

class ProjectService extends BaseService {

    constructor() {
        super();
    }

    async create(req) {
        try {
            await Project.create({
                ...req.body,
            })

            return this.response({});
        } catch (error) {
            return this.serverErrorResponse(error)
        }
    }

    async getProjects(req) {
        const {name} = req.query;
        try {
            if (req.query.hasOwnProperty('trending')) {
                const project = await Project.find({
                    "details.trending": true
                })

                return this.response({
                    data: project
                });
            }

            if (name) {
                const regex = new RegExp(["^", name, "$"].join(""), "i");
                const project = await Project.find(  { name: regex });

                return this.response({
                    data: project
                });
            }

            const project = await Project.find();
            return this.response({
                data: project
            });

        } catch (error) {
            return this.serverErrorResponse(error)
        }
    }
}

module.exports = ProjectService;
