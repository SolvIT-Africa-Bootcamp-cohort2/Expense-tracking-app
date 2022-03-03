import { createTransport } from "nodemailer";
import{ red,green} from "chalk";
const log = console.log

const sendEmail = async (email,username, subject, text) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    await transporter.sendMail({
      from: "kevinrukundo1@gmail.com",
      to: email,
      subject: subject,
      html: `<!DOCTYPE html>
      <html><head><title>Verify Email</title>
      </head><body><div>
      <h3>You're almost there! </h3>
      <p>Hi ${username}, Thank you for your for creating for Xpense Trackr.</p>
      <a href="${text}">Verify Account </a>

      </div></body></html>`
    });
    log(green("email sent sucessfully"));
    return true;
  } catch (error) {
    log(red("email not sent"));
    log(red(error));
    return false;
  }
};

export default sendEmail;