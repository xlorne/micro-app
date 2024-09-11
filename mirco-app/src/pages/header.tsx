import React from "react";
import {Image} from "antd";
import apple from "@/assets/apple.jpg";

const Header = ()=>{
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Header</h1>
            <Image src={apple}/>
        </div>
    )
}

export default Header;
