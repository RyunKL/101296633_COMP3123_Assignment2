import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
    const location=useLocation()

    return (
        <div className="homepage" >
            <h1>Welcome {location.state.id}! Here is the employee list</h1>
        </div>
    )
}

export default Home