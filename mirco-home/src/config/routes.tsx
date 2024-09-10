import {createHashRouter} from "react-router-dom";
import React from "react";
import Test from "@/pages/Test";
import Home from "@/pages/Home";

// 路由配置
export const routes = [
    {
        path: '/test',
        element: <Test />,
    },

    {
        path: '/',
        element: <Home />,
    },
];

export const hashRoutes = createHashRouter(
    [
        ...routes
    ]
);
