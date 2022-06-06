const TrendController = require("../controllers/TrendController")
const trendController = new TrendController();

const { Router } = require("express");

const router = Router();

router.get("/", trendController.getTrends.bind(trendController));
router.post("/", trendController.create.bind(trendController));

module.exports = router;
