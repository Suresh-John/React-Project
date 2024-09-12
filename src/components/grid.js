import React from 'react';
import { useNavigate } from 'react-router-dom';

const GridItem = ({ name, age, gender, role, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/detail', { state: { name, age, gender, role, url } });
    };

    return (
        <div className="grid-item"  onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="image-container">
            <img src={url} alt="avatar" />
            </div>
            <div className="content">
                <h3>{name}</h3>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Role: {role}</p>
            </div>
        </div>
    );
};

export default GridItem;
