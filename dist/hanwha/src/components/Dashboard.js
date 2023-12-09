"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const axios_1 = require("axios");
const Board_1 = require("./Board");
const Card = styled_components_1.default.div `
  width: 50%;
  min-height: 500px;
`;
const SportList = styled_components_1.default.div `
  max-height: 350px;
  overflow-y: scroll;

  p {
    font-weight: bold;
  }
  span {
    margin-left: 30px;
  }
`;
const Dashboard = () => {
    const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
    const [sportsData, setSportsData] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getSports = async () => {
            try {
                const response = await axios_1.default.get('https://odds.p.rapidapi.com/v4/sports', {
                    params: { all: 'true' },
                    headers: {
                        'X-RapidAPI-Key': RAPID_API_KEY,
                        'X-RapidAPI-Host': 'odds.p.rapidapi.com',
                    },
                });
                setSportsData(response.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getSports();
    }, [RAPID_API_KEY]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "row", children: [(0, jsx_runtime_1.jsxs)(Card, { style: { width: '40%' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Live Sports Odds" }), (0, jsx_runtime_1.jsx)(SportList, { children: sportsData.map((sport) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: sport.title }), (0, jsx_runtime_1.jsxs)("span", { children: [" : ", sport.description] })] }, sport.key))) })] }), (0, jsx_runtime_1.jsx)(Card, { style: { width: '60%' }, children: (0, jsx_runtime_1.jsx)(Board_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "row", children: [(0, jsx_runtime_1.jsx)(Card, { children: (0, jsx_runtime_1.jsx)("h4", { children: "dashboard3" }) }), (0, jsx_runtime_1.jsx)(Card, { children: (0, jsx_runtime_1.jsx)("h4", { children: "dashboard4" }) })] })] }));
};
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map