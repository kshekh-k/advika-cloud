import { NextRequest } from 'next/server';

interface RecaptchaResponse {
  success: boolean;
  'error-codes'?: string[];
}

export async function POST(req: NextRequest) {
  const { token } = (await req.json()) as { token: string };

  try {
    if (!token) {
      throw new Error('Token is missing');
    }

    const secretKey = process.env.NEXt_PUBLIC_CAPTCHA_SECRET_KEY; // Replace with your actual secret key
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verificationUrl, { method: 'POST' });
    const data: RecaptchaResponse = await response.json();

    if (data.success) {
      return Response.json({ success: true });
    } else {
      return Response.json(data);
    }
  } catch (error) {
    return Response.json({
      error: true,
      message: 'Failed to add contact record',
      data: String(error),
    });
  }
}
