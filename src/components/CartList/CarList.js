import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CarList.css';

const CarList = (props) => {
    const { id, image, vehicle } = props.vehicle;

    return (
        <Link to={"/"+ id}>
            <div className="car-image">
                <img style={{ width: "150px" }} src={image} alt="" />
                <p>{vehicle}</p>
            </div>
        </Link>

    );
};

export default CarList;
{/* <Link to={"/"+ id}>{vehicle}</Link> */ }
            // <Link to={"/"+ id}></Link>
