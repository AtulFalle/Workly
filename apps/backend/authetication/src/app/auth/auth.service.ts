import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Hardcoded users for demo purposes
  private readonly users = [
    {
      id: 1,
      username: 'admin',
      password: 'password',
      email: 'admin@example.com',
    },
    {
      id: 2,
      username: 'user',
      password: 'user123',
      email: 'user@example.com',
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      username: user.username, 
      sub: user.id,
      email: user.email 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }

  async validateUserById(userId: number): Promise<any> {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
