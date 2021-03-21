import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import fakeData from '../../fakeData/riderData.json';
import SearchDetails from './SearchDetails/SearchDetails';
import './SearchRider.css';
import googleMap from '../../images/Map.png';

const SearchRider = (props) => {
    const { setRide } = useContext(userContext);
    const { vehicleId } = useParams();
    const vehcileNum = parseInt(vehicleId);
    const selectedRider = fakeData.find(res => res.id === vehcileNum)
    setRide(selectedRider);

    return (
        <div className="container">
            <div className="row">
                <div className='d-flex justify-content-center text-center'>
                    <div className="form-style p-3 ">
                        <form action="" className="shadow p-5 formStyle">
                            <p>Pick from </p> <br />
                            <input type="text" placeholder="Default Dhaka" /> <br />
                            <input type="text" placeholder="Default Sylhet" /> <br />
                            <button id="buttonColor" className="btn btn-success mt-2"><Link to="/destination">Search</Link></button>
                        </form>
                    </div>
                    <div className="map-style  ">
                        <img src={googleMap} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchRider;