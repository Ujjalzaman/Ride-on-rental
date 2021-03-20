import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CarList.css';
const CarList = (props) => {
    const { id, image, vehicle } = props.vehicle;
    return (
        <div className="car-image">
            <img style={{width:"150px"}} src={image} alt="" />
            <p>{vehicle}</p>
        </div>
    );
};

export default CarList;