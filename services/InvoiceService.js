const { sendMessage } = require("../helper/socket");
const BaseService = require("./BaseService");

class InvoiceService extends BaseService {
    constructor() {
        super()
    }

    async getStatus(req) {
        sendMessage(req.body);
        return this.response({});
    }
}

module.exports = InvoiceService