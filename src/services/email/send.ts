import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_KEY);

const SENDER_EMAIL = "info@mail.garagewebsolutions.com";
const TO_EMAILS = ["serojjan2000@gmail.com", "vahagnaghayan@gmail.com"];

export const buildsSendEmail = () => async (data: string) => {
  const text = data;
  const msg = {
    to: TO_EMAILS,
    from: SENDER_EMAIL,
    subject: "GWS website",
    text,
  };

  await sgMail.send(msg);
};
