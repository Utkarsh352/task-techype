import { Controller, Get, Req, Res } from '@nestjs/common';
import { SocialAuthService } from './social-auth.service';

@Controller('auth')
export class SocialAuthController {
  constructor(private readonly socialAuthService: SocialAuthService) {}

  // Redirect to Google OAuth
  @Get('google')
  googleLogin(@Req() req, @Res() res) {
    return this.socialAuthService.googleRedirect(req, res); 
  }

  // Redirect to LinkedIn OAuth
  @Get('linkedin')
  linkedinLogin(@Req() req, @Res() res) {
    return this.socialAuthService.linkedinRedirect(req, res); 
  }
}
