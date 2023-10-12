import { createTransport } from "nodemailer";
import nodemailer from 'nodemailer'

export const sendMail = async (text) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0d52d657c745d9",
      pass: "7b7a8254865f14"
    }
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};
