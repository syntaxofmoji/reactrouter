import React from 'react'

function Home() {
  return (
      <div className="container">
          <h1 style={{
                display: "flex"
            }}
            >This is Home Page</h1>
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
          >Login</button>
      </div>
  )
}

export default Home
