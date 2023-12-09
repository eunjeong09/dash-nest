"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../users/user.entity");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async signIn(email, password) {
        this.getAllUsers();
        const user = await this.usersRepository.findOne({
            where: { email, password },
        });
        if (user) {
            const { username, email } = user;
            const payload = { username, email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async signUp(username, email, password) {
        const userWithEmailExists = await this.usersRepository.findOne({
            where: { email: email },
        });
        if (userWithEmailExists) {
            throw new common_1.ConflictException('이메일이 이미 사용 중입니다.');
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
    async getAllUsers() {
        try {
            const users = await this.usersRepository.find();
            return users;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(username) {
        return this.usersRepository.findOne({ where: { username } });
    }
    async isTokenExpired(token) {
        try {
            const decoded = this.jwtService.verify(token);
            if (!decoded.exp) {
                return true;
            }
            const currentTimestamp = Math.floor(Date.now() / 1000);
            return decoded.exp < currentTimestamp;
        }
        catch (error) {
            return true;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.default)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map