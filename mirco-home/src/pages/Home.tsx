import React from "react";
import {useNavigate} from "react-router";
import {Button} from "antd";

const Home = () => {
    const navigate = useNavigate();

    const handlerTest = () => {
        navigate('/test');
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
            Index Page
            <Button onClick={handlerTest}>go remote component page</Button>
        </div>
    )
}

export default Home;
