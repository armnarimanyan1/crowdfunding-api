const BaseService = require("./BaseService")

class ProjectDetailsService extends BaseService {

    constructor() {
        super();
    }

    async create() {
        return this.response({}); // todo create the functionality
    }
}

module.exports = ProjectDetailsService;
