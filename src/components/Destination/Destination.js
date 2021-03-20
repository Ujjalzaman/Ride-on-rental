import React from 'react';
import { useParams } from 'react-router-dom';
import SearchRider from '../SearchRider/SearchRider';

const Destination = () => {
    const { type } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-4'>
                    <SearchRider type={type}></SearchRider>
                </div>
                <div className="col-md-8">
                </div>
            </div>
        </div>
    );
};

export default Destination;