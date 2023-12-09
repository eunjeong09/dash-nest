import User from './user.entity';
import { Repository } from 'typeorm';
export interface UserRepository extends Repository<User> {
    this: Repository<User>;
    getUserWithPassword(userId: number): Promise<any>;
}
type CustomUserRepository = Pick<UserRepository, 'getUserWithPassword'>;
export declare const customUserRepositoryMethods: CustomUserRepository;
export {};
