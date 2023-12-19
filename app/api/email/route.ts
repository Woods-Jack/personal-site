import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
  const { email, name, message, token } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      accessToken: token,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OATUH_CLIENT_SECRET,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: `Portfolio Contact Request from ${name}`,
    text: `
      This is a message from ${name} with E-Mail ${email}
      
      Message: ${message}
    `
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err: any, info: any) {
        if (!err) {
          console.log('Email sent:', info)
          resolve('Thanks for your message! If it requires a response, I will aim to get back to you in the next 3 business days.');
        } else {
          console.log('Error sending email:', err)
          reject(err.message);
        }
        transporter.close();
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks for your message! If it requires a response, I will aim to get back to you in the next 3 business days.' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}