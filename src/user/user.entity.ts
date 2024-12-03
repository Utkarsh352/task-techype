import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; 

  @Column()
  name: string;

  @Column()
  provider: string; // 'google' or 'linkedin'

  @Column()
  providerId: string; // Unique ID from the OAuth provider
}
