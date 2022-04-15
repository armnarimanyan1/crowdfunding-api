const ProjectDetailsController = require("../controllers/ProjectDetailsController")
const projectDetailsController = new ProjectDetailsController();

const { Router } = require("express");

const router = Router();

router.post("/", projectDetailsController.create.bind(projectDetailsController));

module.exports = router;
