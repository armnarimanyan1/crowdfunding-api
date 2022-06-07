const ProjectService = require("../services/ProjectService");

class ProjectController {

    constructor() {
        this.projectService =  new ProjectService();
    }

    async getProjects(req, res) {
        const data = await this.projectService.getProjects(req);
        res.status(data.statusCode).json(data);
    }

    async create(req, res) {
        const data = await this.projectService.create(req);
        res.status(data.statusCode).json(data);
    }
}

module.exports = ProjectController;
