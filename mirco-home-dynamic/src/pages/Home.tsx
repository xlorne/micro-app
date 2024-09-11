import React from "react";
import {useNavigate} from "react-router";
import {Button} from "antd";
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
            <Button onClick={handlerDynamic}>dynamic</Button>

            <Button onClick={handlerAddHello}>add Hello page </Button>

            <Button onClick={handlerAddDynamicHello}>add Dynamic Hello page </Button>

            <Button onClick={handlerGo}>go Hello</Button>

            <Button onClick={handlerRemoveHello}>remove Hello</Button>
        </div>
    )
}

export default Home;
