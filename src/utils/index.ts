import nodemailer from 'nodemailer';

type Props = {
  subject: string;
  text: string;
  to: string[];
};

export async function sendMail(props: Props) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAILER_USERNAME,
      pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Advika Cloud" <${process.env.NEXT_PUBLIC_MAILER_USERNAME}>`,
    to: props.to,
    subject: props.subject,
    text: props.text,
  };

  return transporter.sendMail(mailOptions);
}
