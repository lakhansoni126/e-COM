import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.log(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
        
    }

    const searchHandle= async(event)=>{
        let key = event.target.value
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
        result=  await result.json();
        if(result){
            setProducts(result)
        }
        }else{
            getProducts();
        }
        
    }



    return (
        <div className="pL">
            <h4>Product list</h4>
            <input type="text" className="ibs" placeholder="Search Product" 
            onChange={searchHandle}
            />
            <ul>

                <li>S. No.</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>operation</li>
            </ul>
            {   products.length> 0 ? products.map((item, index) =>
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li> <button onClick={() => deleteProduct(item._id)} className="" >Delete</button>
                        <Link to={"/update/" + item._id} >Update</Link>
                    </li>
                </ul>
                )
                :
                <h1>NO Result Found</h1>
        
        }
        </div>
    )
}

export default ProductList;