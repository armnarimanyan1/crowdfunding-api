const ProjectController = require("../controllers/ProjectController")
const projectController = new ProjectController();

const { Router } = require("express");

const router = Router();

router.get("/", projectController.getProjects.bind(projectController));
router.post("/", projectController.create.bind(projectController));

module.exports = router;
