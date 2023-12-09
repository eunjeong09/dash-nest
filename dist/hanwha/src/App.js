"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const recoil_1 = require("recoil");
const AuthGuard_1 = require("./components/AuthGuard");
const Header_1 = require("./components/Header");
const Footer_1 = require("./components/Footer");
const SignIn_1 = require("./components/SignIn");
const NotFound_1 = require("./components/NotFound");
const Prepare_1 = require("./components/Prepare");
const Dashboard_1 = require("./components/Dashboard");
require("./App.css");
const token_1 = require("./token");
function App() {
    const [tokenExpired, setTokenExpired] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkTokenExpired = async () => {
            const isExpired = await (0, token_1.expired)();
            setTokenExpired(isExpired);
        };
        checkTokenExpired();
    }, []);
    return ((0, jsx_runtime_1.jsx)(recoil_1.RecoilRoot, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/sign-in", element: (0, jsx_runtime_1.jsx)(SignIn_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(AuthGuard_1.default, { authentication: true, tokenExpired: tokenExpired }), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/info/*", element: (0, jsx_runtime_1.jsx)(Prepare_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product/*", element: (0, jsx_runtime_1.jsx)(Prepare_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map