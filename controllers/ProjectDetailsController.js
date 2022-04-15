const ProjectDetailsService = require("../services/ProjectDetailsService");

class ProjectDetailsController {

    constructor() {
        this.ProjectDetailsService =  new ProjectDetailsService();
    }

    async create(req, res) {
        const data = await this.ProjectDetailsService.create(req);
        res.status(data.statusCode).send(data);
    }
}

module.exports = ProjectDetailsController;
