"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const menu_1 = require("../dummy/menu");
const DepthContainer = styled_components_1.default.div `
  background: #fff;
  border-bottom: 3px solid black;
  display: flex;
  height: 60px;
  line-height: 60px;

  li {
    text-align: center;
    width: 150px;
  }
`;
const Logo = styled_components_1.default.div `
  font-size: 30px;
  font-weight: bold;
  min-width: 250px;
  padding-left: 10px;
`;
const Depth1 = styled_components_1.default.ul `
  display: flex;

  li {
    font-weight: bold;
    width: 150px;
  }
`;
const Depth2 = styled_components_1.default.div `
  background: #e8e8e8;
  display: block;
  height: 0px;
  left: 0;
  overflow: hidden;
  position: absolute;
  padding-left: 260px;
  top: 63px;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 5;
  ul {
    display: inline-block;
    float: left;
  }
`;
const Depth2Item = styled_components_1.default.li `
  &:hover {
    background: cornflowerblue;
    color: white;
    font-weight: bold;
    transition: 0.5s;
  }
`;
const Header = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(DepthContainer, { onMouseEnter: (e) => {
                setOpen(true);
            }, onMouseLeave: (e) => {
                setOpen(false);
            }, children: [(0, jsx_runtime_1.jsxs)(Depth1, { children: [(0, jsx_runtime_1.jsx)(Logo, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "LOGO" }) }), menu_1.menu?.map((menuItem, i) => {
                            return ((0, jsx_runtime_1.jsxs)("li", { children: [menuItem.title, (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${menuItem.path}` })] }, i));
                        })] }), (0, jsx_runtime_1.jsx)(Depth2, { className: "depth2", style: { height: open ? '300px' : '0px' }, children: menu_1.menu.map((menuItem, i) => {
                        return ((0, jsx_runtime_1.jsx)("ul", { children: menuItem.list.map((item, j) => {
                                return ((0, jsx_runtime_1.jsx)(Depth2Item, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${item.path}`, children: item.title }) }, j));
                            }) }, i));
                    }) })] }) }));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map