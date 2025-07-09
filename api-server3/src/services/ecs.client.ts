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
        subnets: [
          "subnet-060b023c64fa4c1a9",
          "subnet-0b64db3540f15992b",
          "subnet-0d84b6d82db54d414",
        ],
        securityGroups: config.AWS.SECURITY_GROUPS,
        assignPublicIp: "ENABLED",
      },
    },
    overrides: {
      containerOverrides: [
        {
          name: "builder-image",
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

export const ContainerSpinCommnad2 = (GitRepoUrl: string, projectID: string) => {
  return new RunTaskCommand({
    cluster: config.ECS.CLUSTER,
    taskDefinition: config.ECS.TASK,
    launchType: "FARGATE",
    count: 1,
    networkConfiguration: {
      awsvpcConfiguration: {
        subnets: [
          "subnet-060b023c64fa4c1a9",
          "subnet-0b64db3540f15992b",
          "subnet-0d84b6d82db54d414",
        ],
        securityGroups: config.AWS.SECURITY_GROUPS,
        assignPublicIp: "ENABLED",
      },
    },
    overrides: {
      containerOverrides: [
        {
          name: "builder-image",
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
