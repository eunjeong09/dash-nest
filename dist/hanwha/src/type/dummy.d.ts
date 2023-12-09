type subList = {
    title: string;
    path: string;
};
export type Menu = {
    title: string;
    depth1: string;
    path: string;
    list: subList[];
};
export type Job = {
    id: number;
    title: string;
    name: string;
};
export type Sport = {
    key: string;
    group: string;
    title: string;
    description: string;
    actions: boolean;
    has_outrights: boolean;
};
export {};
