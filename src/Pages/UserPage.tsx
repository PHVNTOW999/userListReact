import React from 'react';
import {useLocation} from "react-router-dom";

const UserPage = () => {
    const location = useLocation()

    return (
        <div>
            <h1>{location.state?.data.username}</h1>
        </div>
    );
};

export default UserPage;