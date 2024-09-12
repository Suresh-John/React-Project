import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
    const location = useLocation();
    const { name, age, gender, role, url } = location.state;
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        
        <div>
            <div className="image-container">
            <img src={url} alt="avatar" />
            </div>
            <h2>{name}'s Details</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Role: {role}</p>
            <button className='back' onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default Detail;
