import React, { useEffect, useState } from 'react';
import CarList from '../CartList/CarList';
import Background from '../../images/Bg.png';
import fakeData from '../../fakeData/riderData.json';
import './Home.css';
const Home = () => {
    const [vehicle, setVehicle] = useState([]);
    const [selected, setSelected] = useState('');
    useEffect(() => {
        setVehicle(fakeData)
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

// const handleAddProduct = (product) =>{
    //     const toBeaddedKey = product.key;
    //     const sameProduct = cart.find(pd => pd.key !== toBeaddedKey);
    //     let count = 1;
    //     let newCart;
    //     if(sameProduct){
    //         count = sameProduct.quantity + 1;
    //         sameProduct.quantity = count;
    //         const others = cart.filter(pd => pd.key !==toBeaddedKey);
    //         newCart = [...others, sameProduct];
    //     }
    //     else{
    //         product.quantity = 1;
    //         newCart = [...cart, product]
    //     }
    //     // const newCart = [...cart, product]
    //     setCart(newCart)
    //     // const sameProduct = newCart.filter(pd => pd.key === product.key)
    //     // const count = sameProduct.length
    //     addToDatabaseCart(product.key, count);