import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

interface ContactRequest {
  from: string;
  subject: string;
  text: string;
}

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_API_EMAIL,
    pass: process.env.NEXT_PUBLIC_API_PASSWORD,
  },
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { from, subject, text }: ContactRequest = req.body;

  const content = `Email enviado por ${from}.\n\n${text}`;

  const mailOptions = { from, to: process.env.NEXT_PUBLIC_API_EMAIL, subject, text: content };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send({ message: 'Email sent successfully' });
    }
  });
};
