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


  
  const command = ContainerSpinCommnad(GitRepoUrl, projectSlug);
  await ecsClient.send(command);
};
