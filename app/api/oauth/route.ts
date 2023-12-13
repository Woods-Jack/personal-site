import { NextRequest, NextResponse } from "next/server";
import { google } from 'googleapis';

export async function GET(req: NextRequest) {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
  });

  const getAccessToken = () => new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  try {
    const accessToken = await getAccessToken();
    const res= NextResponse.json({ accessToken }, { status: 200 });
    res.headers.set('Cache-Control', 'max-age=3600');


  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}