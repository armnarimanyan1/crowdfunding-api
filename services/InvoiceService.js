const {sendMessage} = require("../helper/socket");
const BaseService = require("./BaseService");

class InvoiceService extends BaseService {
    constructor() {
        super()
    }

    async getStatus(req) {
        const {type} = req.body;
        switch (type) {
            case "InvoiceCreated":
                sendMessage({ status: "New"});
                break
            case "InvoiceReceivedPayment":
                sendMessage({ status: "Settled"});
                break
            case "InvoiceSettled":
                sendMessage({ status: "Complete"});
                break
            case "InvoiceExpired":
                sendMessage({ status: "Expired"});
                break
            default:
                sendMessage({ status: "Error"});
                return this.serverErrorResponse()
        }
        return this.response({});
    }
}

module.exports = InvoiceService
