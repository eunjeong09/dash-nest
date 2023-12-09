"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customUserRepositoryMethods = void 0;
exports.customUserRepositoryMethods = {
    async getUserWithPassword(userId) {
        try {
            const user = await this.users.findOne({
                where: { id: userId },
                select: { id: true, email: true, username: true, password: true },
            });
            return { ok: true, user };
        }
        catch (e) {
            return { ok: false, error: e.message };
        }
    },
};
//# sourceMappingURL=user.repository.js.map