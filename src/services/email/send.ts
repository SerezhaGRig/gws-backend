import * as Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.EMAIL_KEY,
);

const SENDER_EMAIL = "gws@info.garagewebsolutions.com";
const TO_EMAILS = [
  { email: "vahagnaghayan@gmail.com", name: "GWS" },
  { email: "serojjan2000@gmail.com", name: "GWS" },
];

export const buildsSendEmail = () => async (data: string) => {
  const sendSmtpEmail = {
    to: TO_EMAILS,
    sender: { email: SENDER_EMAIL, name: "GWS website" },
    subject: "GWS website",
    htmlContent: data,
  };

  // Send email
  await apiInstance.sendTransacEmail(sendSmtpEmail);
};
