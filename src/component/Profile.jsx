import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    return(
        <div className='container'>
            
            <h1 style={{
                display: "flex"
            }}
            > This Student ID of user is {id} </h1>
        </div>
    );
}

export default Profile;

//Created: Thursday, 6 April BE 2566 00:30
//Modified: Thursday, 6 April BE 2566 04:44
