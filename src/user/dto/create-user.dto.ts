export class CreateUserDto {
    email: string;
    username: string;
    password: string;
    name: string;
    provider: string;  // E.g., google, linkedin
    providerId: string;  // Unique identifier from the provider 
  }
  