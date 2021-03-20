import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CartList.css';
const CarList = (props) => {
    const { id, image, vehicle } = props.vehicle;
    return (
        <div className="list">
            <div className="car-image">
                <img src={image} alt=""/>
                <p>{vehicle}</p>
            </div>
        </div>
    );
};

export default CarList;