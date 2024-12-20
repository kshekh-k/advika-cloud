import { NextRequest } from 'next/server';
import { google } from 'googleapis';
import { sendMail } from '@/utils';
import { format } from 'date-fns';

export type FormSubmit = {
  name: string;
  email: string;
  contact: string;
  website: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as FormSubmit;

  const client_email = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
  const private_key = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;
  const spreadsheet_id = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email,
      private_key,
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const values = [
    [
      format(new Date(), 'd MMMM, yyyy'),
      body.name,
      body.email,
      body.contact,
      body.website,
      body.message,
    ],
  ];

  // Me apko whatsapp pr call krta hu.. phone sy pick krna

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheet_id,
      range: 'A1:F1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    await sendMail({
      subject: 'New message received at advika.cloud',
      text: `Dear Admin!\nA new form has been submitted:\nName: ${
        body.name
      }\nEmail: ${body.email}\nContact: ${body.contact}\nWebsite: ${body.website}\nMessage: ${
        body.message
      }`,
      to: ['rahul.raj@advika.cloud', 'kshekh@kshekh.com'],
    });

    return Response.json({
      error: false,
      message: 'Your form has been successfully submitted',
      data: response.data,
    });
  } catch (error) {
    return Response.json({
      error: true,
      message: 'Failed to send this details',
      data: String(error),
    });
  }
}
