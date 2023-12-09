import { AuthService } from './auth.service';
import CreateUserDto from 'src/users/dto/createUser.dto';
import User from 'src/users/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getAllUsers(): Promise<User[]>;
    signIn(signInDto: Record<string, any>): Promise<{
        accessToken: string;
    }>;
    create(signUpDto: CreateUserDto): Promise<boolean>;
    isTokenExpired(token: any): Promise<boolean>;
    getProfile(req: any): any;
}
