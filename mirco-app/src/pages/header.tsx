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
            <h1>Header Component</h1>

            <Image
                style={{
                    margin:10
                }}
                src={apple}
            />
        </div>
    )
}

export default Header;
