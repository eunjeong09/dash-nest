"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expired = void 0;
const axios_1 = require("axios");
const storage = localStorage.getItem('accessToken');
async function checkExpired(accessToken) {
    if (accessToken === null)
        return true;
    const temp = { token: accessToken };
    try {
        const response = await axios_1.default.post('http://localhost:3000/auth/expired', temp, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        return false;
    }
}
const expired = async () => {
    return await checkExpired(storage);
};
exports.expired = expired;
//# sourceMappingURL=token.js.map