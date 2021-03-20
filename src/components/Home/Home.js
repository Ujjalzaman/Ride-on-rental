import React, { useEffect, useState } from 'react';
import CarList from '../CartList/CarList';
import Background from '../../images/Bg.png';
import './Home.css';
const Home = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        fetch("https://api.mocki.io/v1/9bf918a8")
            .then(res => res.json())
            .then(data => setVehicle(data))
    }, [])
    return (
        <div className="container">
            <div id="bgImage" style={{ backgroundImage: `url(${Background})` }}>
                <div className="vehicleList">
                    {
                        vehicle.map(vehicle => <CarList key={vehicle.id} vehicle={vehicle}></CarList>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;