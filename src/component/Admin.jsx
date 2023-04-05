import React from 'react'

function Admin() {
    return (
        <div className="container">
            <img src="https://www.pedestrian.tv/wp-content/uploads/2017/07/nintendogs-619-386.png?quality=80&resize=1280,720" alt="Play nintendog!!!!" width="300" />
            <h1 style={{
                display: "flex"
            }}
            >This is Admin Page</h1> 
            <button style ={{
                margin: "20px auto",
                display: "flex",
                padding: "12px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
            }}  > Logout</button>
        </div>
    )
}

export default Admin
