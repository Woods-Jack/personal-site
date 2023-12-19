import { NextRequest, NextResponse } from "next/server";
import { google } from 'googleapis';

interface AccessToken {
  token: string;
  timestamp: string;
}

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

  const getAccessToken = () => {
    return new Promise<AccessToken>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if(token) {
          const accessToken: AccessToken = {
            token: token,
            timestamp: new Date().toISOString(),
          }
          resolve(accessToken);
        }
        reject("Failed to create access token :(");
      });
    });
  };

  try {
    const accessToken = await getAccessToken();
    console.log('token', accessToken);
    const res = NextResponse.json(accessToken , { status: 200 });
    res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    return res;
  } catch (err) {
    console.error('Error while fetching access token:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  } 
}