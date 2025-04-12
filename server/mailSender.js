import nodemailer from "nodemailer";
import "dotenv/config";

class MailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendEmail(letter) {
    console.log('letter', process.env.MAIL_USER, process.env.MAIL_PASS);
    const info = await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Новая заявка от ${letter?.name}, ${letter?.phone}`,
      html: `
             <div style="display: flex; flex-direction:column; background-color: #1877F2; padding: 10px; color: white">
                <h1 style="font-style: italic; font-size: 1.5rem; justify-self: center;">AA_Group</h1>
                <p style="font-size:1.15rem">Имя: ${letter?.name}</p>
                <p style="font-size:1.15rem">Телефон: ${letter?.phone}</p>
             </div>
          `,
    });
    return info;
  }
}

export default new MailSender();
