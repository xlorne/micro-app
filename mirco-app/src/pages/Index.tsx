import React from "react";
import {useNavigate} from "react-router";
import {Button} from "antd";


const Index = () => {
    const navigate = useNavigate();

    const handlerTest = () => {
        navigate('/header');
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
            <Button onClick={handlerTest}>go component</Button>
        </div>
    )
}

export default Index;
