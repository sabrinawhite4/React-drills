import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

function Details() {
    const [product, setProduct] = useState({});
    let location = useLocation();
    let id = location.pathname.split('/')[2];

    useEffect(() => {
        axios.get(`https://practiceapi.devmountain.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            });
    }, [id]);

    let productDetails = 
        <div>
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <p>{product.desc}</p>
        </div>;
      

    return (
        <div className="Details">
            Details
            {productDetails}
            <a href='/'>Back to Home</a>
        </div>
    )
}

export default Details;