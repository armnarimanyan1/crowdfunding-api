const BaseService = require("./BaseService")
const Trend = require('../database/trendModel')

class TrendService extends BaseService {

    constructor() {
        super();
    }

    async create(req) {
        try {
            await Trend.create({
                ...req.body,
            })

            return this.response({});
        } catch (error) {
            return this.serverErrorResponse(error)
        }
    }

    async getTrends() {
        try {
            const trends = await Trend.find({}).exec();

            return this.response({
                data: trends
            });
        } catch (error) {
            return this.serverErrorResponse(error)
        }
    }
}

module.exports = TrendService;
