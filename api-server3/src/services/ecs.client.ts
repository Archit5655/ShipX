import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import { config } from "../config/config.js";

const region = config.AWS.REGION;
const accessKey =config.AWS.ACCESS_KEY; ;
const secretKey = config.AWS.SECRET_ACCESS_KEY;

const ecsClient = new ECSClient({
  region: region!,
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretKey!,
  },
});
export default ecsClient;
