import React, { useContext } from 'react';
import { userContext } from '../../App';
import googleMap from '../../images/Map.png';
import './Destination.css';

const Destination = () => {
    const { ride } = useContext(userContext);
    // const {id, image, vehicle, destination, capacity} = ride;

    console.log(ride)
    return (
        <div className="container">
            <div className="row">
                <div className='d-flex justify-content-center text-center'>
                    <div className=" p-3 ">
                        <form action="" className="shadow p-5 ride-style">
                            <p>Sylhet</p>
                            <h6>To</h6>
                            <p>Dhaka</p>
                            <div className="d-flex justify-content-center text-center ride-desc">
                                <img src={ride.image} alt="" />
                                <p>{ride.vehicle}</p>
                                <p>{ride.capacity}</p>
                                <p>${ride.fare}</p>
                            </div>
                        </form>
                    </div>
                    <div className="map-style ">
                        <img src={googleMap} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;