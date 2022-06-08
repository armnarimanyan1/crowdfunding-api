const InvoiceController = require("../controllers/InvoiceController")
const invoiceController = new InvoiceController();

const { Router } = require("express");

const router = Router();

router.get("/status", invoiceController.getStatus.bind(invoiceController));

module.exports = router;
