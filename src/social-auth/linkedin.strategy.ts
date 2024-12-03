import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-linkedin-oauth2';
import { SocialAuthService } from './social-auth.service';

@Injectable()
export class LinkedInStrategy extends PassportStrategy(Strategy, 'linkedin') {
  constructor(private socialAuthService: SocialAuthService) {
    super({
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: 'WPL_AP1.rosrg7hlFCgLwHkG.q8pbGg==',
      callbackURL: 'http://localhost:3000/auth/linkedin/redirect',
      scope: ['r_liteprofile', 'r_emailaddress'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Use the socialAuthService to handle the login
    const { access_token } = await this.socialAuthService.loginWithLinkedIn(profile);
    return { access_token };
  }
}
