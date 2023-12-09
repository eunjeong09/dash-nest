"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const job_1 = require("../dummy/job");
const Board = () => {
    const [posts, setPosts] = (0, react_1.useState)([]);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [postsPerPage] = (0, react_1.useState)(20);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        setPosts(job_1.job);
    }, []);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const indexOfLastFilteredPost = currentPage * postsPerPage;
    const indexOfFirstFilteredPost = indexOfLastFilteredPost - postsPerPage;
    const currentFilteredPosts = filteredPosts.slice(indexOfFirstFilteredPost, indexOfLastFilteredPost);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Job Board" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "\uB0B4\uC6A9 \uAC80\uC0C9 : " }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "\uAC80\uC0C9...", value: searchTerm, onChange: handleSearch })] }), (0, jsx_runtime_1.jsx)("ul", { children: currentFilteredPosts.map((post) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("span", { children: [post.name, " : "] }), (0, jsx_runtime_1.jsx)("span", { children: post.title })] }, post.id))) }), (0, jsx_runtime_1.jsx)("div", { children: Array.from({
                    length: Math.ceil(filteredPosts.length / postsPerPage),
                }).map((_, index) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => paginate(index + 1), style: {
                        margin: '2px',
                        padding: '8px 12px',
                        backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#ddd',
                        color: currentPage === index + 1 ? 'white' : 'black',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }, children: index + 1 }, index + 1))) })] }));
};
exports.default = Board;
//# sourceMappingURL=Board.js.map