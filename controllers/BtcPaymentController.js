const ProjectDetailsService = require("../services/ProjectDetailsService");

class BtcPaymentController  {

    constructor() {
        this.ProjectDetailsService =  new ProjectDetailsService();
    }

    async create(req, res) {
        const data = await this.ProjectDetailsService.create(req);
        res.status(data.statusCode).send(data);
    }
}

module.exports = BtcPaymentController;
