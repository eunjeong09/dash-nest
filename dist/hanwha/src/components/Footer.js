"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.default.div `
  border-top: 3px solid black;
  bottom: 0px;
  padding: 0px 20px;
  position: fixed;
  width: 100%;
`;
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uBB38\uC758\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uC5F0\uB77D \uC8FC\uC138\uC694. \uC804\uD654\uBC88\uD638: 010-9985-6676" }), (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2023 Project" })] }));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map