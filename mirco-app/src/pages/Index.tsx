import React from "react";
import {useNavigate} from "react-router";
import {Button} from "antd";


const Index = () => {
    const navigate = useNavigate();

    const handlerTest = () => {
        navigate('/header');
    }

    return (
        <div>
            Index
            <Button onClick={handlerTest}>test</Button>
        </div>
    )
}

export default Index;
