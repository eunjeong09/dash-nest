"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
exports.menu = [
    {
        title: '회사소개',
        depth1: 'company',
        path: '/info',
        list: [
            { title: '기업개요', path: '/info' },
            { title: '연혁', path: '/info/history' },
            { title: '인증/수상내역', path: '/info/award' },
            { title: '오시는 길', path: '/info/location' },
        ],
    },
    {
        title: '제품소개',
        depth1: 'product',
        path: '/product/showroom',
        list: [
            { title: '사이버 전시장', path: '/product/showroom' },
            { title: 'SMT장비', path: '/product/smt' },
            { title: '반도체후공정장비', path: '/product/semiconductor' },
            { title: '디스플레이장비', path: '/product/display' },
            { title: '공작기계', path: '/product/machinetool' },
        ],
    },
];
//# sourceMappingURL=menu.js.map