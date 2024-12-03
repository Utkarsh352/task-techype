import { Controller, Get, Req, Res } from '@nestjs/common';
import { SocialAuthService } from '../social-auth/social-auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly socialAuthService: SocialAuthService) {}

  @Get('google')
  @ApiOperation({ summary: 'Authenticate with Google' })
  @ApiResponse({ status: 200, description: 'Successfully authenticated with Google.' })
  async googleAuth(@Req() req, @Res() res) {
    return this.socialAuthService.googleRedirect(req, res);
  }

  @Get('linkedin')
  @ApiOperation({ summary: 'Authenticate with LinkedIn' })
  @ApiResponse({ status: 200, description: 'Successfully authenticated with LinkedIn.' })
  async linkedinAuth(@Req() req, @Res() res) {
    return this.socialAuthService.linkedinRedirect(req, res);
  }
}
