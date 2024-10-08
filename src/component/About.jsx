import React from 'react'
import { useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 style={{
                display: "flex"
            }}
            >This is About Page</h1> 
            <button style ={{
                margin: "20px auto",
                display: "flex",
                padding: "12px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={() => navigate("/")}>Redirect</button>
        </div>
    )
}

export default About

//Created: Thursday, 30 March BE 2566 12:01
//Modified: Thursday, 6 April BE 2566 04:44
