import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import CreateUserDto from 'src/users/dto/createUser.dto';
import User from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('users')
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.authService.getAllUsers();
      return users;
    } catch (error) {
      return error.message;
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('join')
  create(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(
      signUpDto.email,
      signUpDto.username,
      signUpDto.password,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('expired')
  isTokenExpired(@Body() token: any) {
    return this.authService.isTokenExpired(token);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
