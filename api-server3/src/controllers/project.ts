import type { Context } from "hono";
// import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import { ecsClient, ContainerSpinCommnad } from "../services/ecs.client.js";
import { generateSlug } from "random-word-slugs";

export const createProject = async (c: Context) => {
  const body = await c.req.json();
  const projectSlug = generateSlug();
  const { GitRepoUrl } = body;

  // prettier-ignore
  if (!GitRepoUrl ||typeof GitRepoUrl !== "string" ||GitRepoUrl.trim() === "") {
    return c.json({
      status: "error",
      message: "gitURL is required and must be a valid string",
      },400
    );
  }
  try {
    const command = ContainerSpinCommnad(GitRepoUrl, projectSlug);
    await ecsClient.send(command);
  } catch (error) {
    console.log("error bhenchod", error);
    return c.json({ message: "Failed to create project", error: error }, 500);
  }
  return c.json(
    {
      status: "queued",
      message: "Project creation has been queued",
      projectSlug: projectSlug,
      url: `http://${projectSlug}.localhost:8000`,
    },
    201
  );
};
