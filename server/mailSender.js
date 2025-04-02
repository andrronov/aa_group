import nodemailer from "nodemailer";
import "dotenv/config";

class MailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.VITE_MAIL_HOST,
      port: process.env.VITE_MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.VITE_MAIL_USER,
        pass: process.env.VITE_MAIL_PASS,
      },
    });
  }

  async sendMail(){};
}

export default new MailSender();