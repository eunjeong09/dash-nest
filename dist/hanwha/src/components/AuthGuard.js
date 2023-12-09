"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
function AuthGuard({ authentication, tokenExpired, }) {
    const [isReady, setIsReady] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (tokenExpired !== null) {
            setIsReady(true);
        }
    }, [tokenExpired]);
    if (!isReady) {
        return null;
    }
    const hasStorage = localStorage.getItem('accessToken') !== null;
    if (authentication) {
        return hasStorage === true ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/sign-in" });
    }
    else {
        return tokenExpired === true || tokenExpired === null ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/" })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}));
    }
}
exports.default = AuthGuard;
//# sourceMappingURL=AuthGuard.js.map