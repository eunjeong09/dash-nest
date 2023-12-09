"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const styled_components_1 = require("styled-components");
const axios_1 = require("axios");
const Container = styled_components_1.default.div `
  width: 40%;
  margin: 0 auto;
`;
const Input = styled_components_1.default.input `
  border: 1px solid #ddd;
  display: block;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;
const Button = styled_components_1.default.input `
  padding: 20px;
`;
const SignIn = () => {
    const [isSignIn, setIsSignIn] = (0, react_1.useState)(true);
    const { register, handleSubmit, reset, formState: { isValid }, } = (0, react_hook_form_1.useForm)();
    const onSubmit = async (data) => {
        reset();
        if (isSignIn) {
            try {
                const response = await axios_1.default.post('http://localhost:3000/auth/login', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.data) {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    window.location.href = '/';
                }
            }
            catch (error) {
                const axiosError = error;
                if (axiosError.response) {
                    if (axiosError.response.status === 401) {
                        alert('Invalid credentials');
                    }
                }
                console.error('API 요청 중 오류 발생:', error);
            }
        }
        else {
            try {
                const response = await axios_1.default.post('http://localhost:3000/auth/join', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.data === true) {
                    alert('회원가입이 완료되었습니다. 로그인해주세요!');
                    setIsSignIn(true);
                }
            }
            catch (error) {
                const axiosError = error;
                if (axiosError.response) {
                    if (axiosError.response.status === 409) {
                        alert('이메일이 이미 사용 중입니다.');
                    }
                }
                console.error('API 요청 중 오류 발생:', error);
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: isSignIn ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)(Input, { ...register('email', { required: '이메일을 입력하세요' }), placeholder: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)(Input, { ...register('password', { required: '비밀번호를 입력하세요' }), placeholder: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", disabled: !isValid })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?", (0, jsx_runtime_1.jsx)("span", { className: "bold underline", onClick: () => {
                                setIsSignIn(false);
                            }, children: "\uD68C\uC6D0\uAC00\uC785" })] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uD68C\uC6D0\uAC00\uC785" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)(Input, { ...register('username', { required: '이름을 입력하세요' }), placeholder: "\uC774\uB984" }), (0, jsx_runtime_1.jsx)(Input, { ...register('email', { required: '이메일을 입력하세요' }), placeholder: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)(Input, { ...register('password', { required: '비밀번호를을 입력하세요' }), placeholder: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", disabled: !isValid })] }), (0, jsx_runtime_1.jsx)("p", { className: "bold underline", onClick: () => {
                        setIsSignIn(true);
                    }, children: "\uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" })] })) }));
};
exports.default = SignIn;
//# sourceMappingURL=SignIn.js.map