import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import { config } from "../config/env.config.js";
export const ecsClient = new ECSClient({
  region: config.AWS.REGION,
  credentials: {
    accessKeyId: config.AWS.ACCESS_KEY!,
    secretAccessKey: config.AWS.SECRET_ACCESS_KEY!,
  },
});
export const ContainerSpinCommnad = (GitRepoUrl: string, projectID: string) => {
  return new RunTaskCommand({
    cluster: config.ECS.CLUSTER,
    taskDefinition: config.ECS.TASK,
    launchType: "FARGATE",
    count: 1,
    networkConfiguration: {
      awsvpcConfiguration: {
        subnets: config.AWS.SUBNETS,
        securityGroups: config.AWS.SECURITY_GROUPS,
        assignPublicIp: "ENABLED",
      },
    },
    overrides: {
      containerOverrides: [
        {
          name: config.ECS.IMAGE_NAME,
          environment: [
            { name: "GIT_REPOSITORY__URL", value: GitRepoUrl.trim() },
            { name: "PROJECT_ID", value: projectID },
            { name: "S3_BUCKET", value: config.AWS.S3_BUCKET },
            { name: "S3_ACCESS_KEY", value: config.AWS.ACCESS_KEY },
            {
              name: "S3_SECRET_ACCESS_KEY",
              value: config.AWS.SECRET_ACCESS_KEY,
            },
            { name: "S3_REGION", value: config.AWS.REGION },
            { name: "REDIS_KEY", value: config.REDIS_KEY },
          ],
        },
      ],
    },
  });
};
