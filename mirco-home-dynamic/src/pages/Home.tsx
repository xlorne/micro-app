import React from "react";
import {useNavigate} from "react-router";
import {Button, Space} from "antd";
import {useRoutesContext} from "@/config/routes";


const Home = () => {
    const navigate = useNavigate();

    const {removeRoute, addDynamicComponentRoute, addPageRoute} = useRoutesContext();

    const handlerDynamic = () => {
        navigate('/test');
    }

    const handlerGo = () => {
        navigate('/hello');
    }

    const handlerRemoveHello = () => {
        removeRoute('/hello');
    }

    const handlerAddHello = () => {
        addPageRoute({
            path: '/hello',
            pageName: 'hello'
        });
    }

    const handlerAddDynamicHello = () => {
        addDynamicComponentRoute({
            path: "/hello",
            remoteUrl: "http://192.168.3.200:13000/remoteEntry.js",
            scope: "MircoApp",
            module: "./Header"
        });
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
                gap: '50px',
            }}
        >
            Home Page
            <Button onClick={handlerDynamic}>load remote component</Button>

            <Space>
                <Button onClick={handlerAddHello}>dynamic add hello page </Button>

                <Button onClick={handlerAddDynamicHello}>dynamic add remote component to hello page </Button>
            </Space>

            <Space>

                <Button onClick={handlerGo}>go hello page</Button>

                <Button onClick={handlerRemoveHello}>remove hello page</Button>
            </Space>

        </div>
    )
}

export default Home;
