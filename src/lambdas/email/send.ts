import { response } from "../../middleware/response";
import { validate } from "../../middleware/validate";
import { buildsSendEmail } from "../../services/email/send";
import { sendEmailSchema, SendEmailSchemaType } from "../../validation/email";

export const logic = async (p: SendEmailSchemaType) => {
  const data = await buildsSendEmail()(p.data);
  return { data, statusCode: 200 };
};

export const handler = response(validate(logic, sendEmailSchema, "body"));
