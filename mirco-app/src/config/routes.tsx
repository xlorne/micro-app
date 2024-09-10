import {createHashRouter} from "react-router-dom";
import React from "react";
import Header from "@/pages/header";
import Index from "@/pages/Index";

// 路由配置
export const routes = [
    {
        path: '/header',
        element: <Header />,
    },

    {
        path: '/',
        element: <Index />,
    },
];

export const hashRoutes = createHashRouter(
    [
        ...routes
    ]
);
