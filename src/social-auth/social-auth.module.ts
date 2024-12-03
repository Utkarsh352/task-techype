import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';  
import { SocialAuthService } from './social-auth.service';
import { SocialAuthController } from './social-auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret', 
      signOptions: { expiresIn: '60m' },  
    }),
    UserModule, 
  ],
  providers: [SocialAuthService],
  controllers: [SocialAuthController],
})
export class SocialAuthModule {}
