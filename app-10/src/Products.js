import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';



function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://practiceapi.devmountain.com/products')
          .then(response => {
            setProducts(response.data);
          });
      }, []);

    let list = products.map((element, index) => {
        return <div key={index}>
            <a href={`/#/details/${element.id}`}><img src={element.image} alt={element.title}/></a>
            <h3>{element.title}</h3>
            <h4>${element.price}</h4>
        </div>;
      });

    return (
        <div className="App">
            <h1>Products</h1>
            {list}
        </div>
    )
}

export default Products;