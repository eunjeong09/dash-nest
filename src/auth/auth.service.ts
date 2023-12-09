import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import User from 'src/users/user.entity';
import { UserRepository } from 'src/users/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ accessToken: string } | null> {
    this.getAllUsers();
    const user = await this.usersRepository.findOne({
      where: { email, password },
    });

    if (user) {
      const { username, email } = user;
      const payload = { username, email };

      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async signUp(
    username: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    // 이메일이 이미 존재하는지 확인
    const userWithEmailExists = await this.usersRepository.findOne({
      where: { email: email },
    });

    if (userWithEmailExists) {
      throw new ConflictException('이메일이 이미 사용 중입니다.');
    }

    const newUser = this.usersRepository.create({
      email,
      username,
      password,
    });
    if (newUser) {
      await this.usersRepository.save(newUser);
      return true;
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async isTokenExpired(token: string): Promise<boolean> {
    try {
      const decoded = this.jwtService.verify(token);

      if (!decoded.exp) {
        return true;
      }

      const currentTimestamp = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTimestamp;
    } catch (error) {
      return true;
    }
  }
}
