import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
const region = process.env.REGION;
const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;
if (!region || !accessKey || !secretKey) {
  throw new Error("AWS credentials are not set in environment variables.");
}
const ecsClient = new ECSClient({
  region: region,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});
export default ecsClient;
