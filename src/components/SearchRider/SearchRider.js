import React from 'react';
import './SearchRider.css'

const SearchRider = () => {    

    return (
        <div className="shadow ">
            <div className="form-style p-3">
                <input type="text" placeholder="from"/>
                <input type="text" placeholder="to" /><br/>
                <button className="button-style mt-2">Search</button>
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src='' alt="" />
                <img className="icon-img" src='' alt="" />
              
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src='' alt="" />
                <img className="icon-img" src='' alt="" />
               
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src='' alt="" />
                <img className="icon-img" src='' alt="" />
              
            </div>
        </div>
    );
};

export default SearchRider;