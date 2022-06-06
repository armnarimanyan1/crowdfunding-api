const TrendService = require("../services/TrendService");

class TrendController {

    constructor() {
        this.trendsService =  new TrendService();
    }

    async getTrends(req, res) {
        const data = await this.trendsService.getTrends(req, res);
        res.status(data.statusCode).json(data);
    }

    async create(req, res) {
        const data = await this.trendsService.create(req);
        res.status(data.statusCode).json(data);
    }
}

module.exports = TrendController;
