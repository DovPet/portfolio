import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const human = await validateHuman(req.body.token)

  if(!human) {
    res.status(400);
    return;
  }
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.EMAIL,
    to: "dovydas.petrutis@gmail.com",
    subject: `${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  await transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(400).json({ success: false });
    else console.log(info);
  });
  res.status(200).json({ success: true });
}

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();

  return data.success;
}
