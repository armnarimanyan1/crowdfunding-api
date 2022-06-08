const InvoiceService = require("../services/InvoiceService");

class InvoiceController {

    constructor() {
        this.invoiceService = new InvoiceService();
    }

    async getStatus(req, res) {
        const data = await this.invoiceService.getStatus(req);
        res.status(200).json(data);
    }
}

module.exports = InvoiceController;
