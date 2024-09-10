import React from "react";
import {useNavigate} from "react-router";
import {Button} from "antd";

const Home = () => {
    const navigate = useNavigate();

    const handlerTest = () => {
        navigate('/test');
    }

    return (
        <div>
            Index
            <Button onClick={handlerTest}>test</Button>

        </div>
    )
}

export default Home;
