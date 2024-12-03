import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library'; 
import axios from 'axios'; // For LinkedIn API
import { UserService } from '../user/user.service';

@Injectable()
export class SocialAuthService {
  private googleClient: OAuth2Client;
  private googleClientId: string;
  private googleClientSecret: string;
  private linkedinClientId: string;
  private linkedinClientSecret: string;

  constructor(private userService: UserService) {
    this.googleClient = new OAuth2Client();
    this.googleClientId = process.env.GOOGLE_CLIENT_ID;
    this.googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
    this.linkedinClientId = process.env.LINKEDIN_CLIENT_ID;
    this.linkedinClientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  }

  // Google OAuth redirection handler
  public async googleRedirect(req: any, res: any) {
    const { code } = req.query;
    const { tokens } = await this.googleClient.getToken(code); // Get the tokens

    const googleProfile = await this.getGoogleProfile(tokens.access_token); // Fetch Google Profile

    const { access_token } = await this.loginWithGoogle(googleProfile);

    return res.json({ access_token }); // Return the access token
  }

  // LinkedIn OAuth redirection handler
  public async linkedinRedirect(req: any, res: any) {
    const { code } = req.query;
    const access_token = await this.getLinkedInAccessToken(code); // Get LinkedIn Access Token

    const linkedinProfile = await this.getLinkedInProfile(access_token); // Fetch LinkedIn Profile

    const { access_token: jwtToken } = await this.loginWithLinkedIn(linkedinProfile);

    return res.json({ access_token: jwtToken }); // Return the access token
  }

  // Fetch user's Google profile using the access token
  private async getGoogleProfile(accessToken: string) {
    const response = await this.googleClient.request({
      url: `https://www.googleapis.com/oauth2/v3/userinfo`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  // Get LinkedIn Access Token
  private async getLinkedInAccessToken(code: string) {
    const response = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.LINKEDIN_CALLBACK_URL,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        },
      }
    );
    return response.data.access_token;
  }

  // Fetch LinkedIn Profile using access token
  private async getLinkedInProfile(accessToken: string) {
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  // Google login logic
  public async loginWithGoogle(profile: any) {
    const user = await this.userService.findOrCreate({
      email: profile.emails[0].value,
      name: profile.displayName,
      provider: 'google',
      providerId: profile.id,
    });

    const access_token = await this.userService.generateAccessToken(user);
    return { access_token };
  }

  // LinkedIn login
  public async loginWithLinkedIn(profile: any) {
    const user = await this.userService.findOrCreate({
      email: profile.emails[0].value,
      name: profile.formattedName,
      provider: 'linkedin',
      providerId: profile.id,
    });

    const access_token = await this.userService.generateAccessToken(user);
    return { access_token };
  }
}
