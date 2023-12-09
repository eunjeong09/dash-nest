import { JwtService } from '@nestjs/jwt';
import User from 'src/users/user.entity';
import { UserRepository } from 'src/users/user.repository';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: UserRepository, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        accessToken: string;
    } | null>;
    signUp(username: string, email: string, password: string): Promise<boolean>;
    getAllUsers(): Promise<User[]>;
    findOne(username: string): Promise<User | undefined>;
    isTokenExpired(token: string): Promise<boolean>;
}
