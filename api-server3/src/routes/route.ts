import { Hono } from "hono";
import { createProject } from "../controllers/project.js";

const ProjectRoutes = new Hono();


ProjectRoutes.post("/project", createProject);

ProjectRoutes.get("/project", (c) => {

  return c.json({ message: "List of projects" });
});

export default ProjectRoutes;
