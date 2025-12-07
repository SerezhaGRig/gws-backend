import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { response } from "../../middleware/response";
import { validate } from "../../middleware/validate";
import { addSubscriberSchema } from "../../validation/maibox";
import { buildAddSubscriber } from "../../services/analytics/addSubscribers";

const ddb = new DynamoDBClient({});

const { MALBOX_TABLE } = process.env;

export const logic = async (p: { itemId: string; email: string }) => {
  const data = await buildAddSubscriber(ddb, MALBOX_TABLE)(p.itemId, p.email);
  return { data, statusCode: 200 };
};

export const handler = response(validate(logic, addSubscriberSchema, "body"));
