import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import { config } from "../config/config.js";

const region = config.AWS.REGION;
const accessKey = config.AWS.ACCESS_KEY;
const secretKey = config.AWS.SECRET_ACCESS_KEY;

export const ecsClient = new ECSClient({
  region: region!,
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretKey!,
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
          name: "builder-image",
          environment: [
            { name: "GIT_REPOSITORY__URL", value: GitRepoUrl },
            { name: "PROJECT_ID", value: projectID },
          ],
        },
      ],
    },
  });
};


