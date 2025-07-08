import type { Context } from "hono";
import ecsClient from "../services/ecs.client.js";
export const createProject = async (c: Context) => {
  const body = await c.req.json();
  const { GitRepoUrl } = body;
  if (
    !GitRepoUrl ||
    typeof GitRepoUrl !== "string" ||
    GitRepoUrl.trim() === ""
  ) {
    return c.json(
      {
        status: "error",
        message: "gitURL is required and must be a valid string",
      },
      400
    );
  }
  







};
