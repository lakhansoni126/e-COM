import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {

    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params = useParams();
    const Navigate = useNavigate();

useEffect(() => {
  getroductDetails();

}, [])

    const getroductDetails =async()=>{
        let result= await fetch(`http://localhost:5000/product/${params.id}`);
        result= await result.json();
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const UpdateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name, price,category,company}),
            headers:{'content-type':'Application/json'}
        })

        result= await result.json()
        if(result){
            Navigate('/')
        }
        
    }


    return (
        <div className='product'>
            <h1>Update Product </h1>
            <input type="text" className='iB' value={name} placeholder='Enter Product Name' onChange={(e) => { setName(e.target.value) }} />
            <input type="text" className='iB' value={category} placeholder='Enter Product category' onChange={(e) => { setCategory(e.target.value) }} />
            <input type="text" className='iB' value={price} placeholder='Enter Product Price' onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" className='iB' value={company} placeholder='Enter Product Company' onChange={(e) => { setCompany(e.target.value) }} />
            <button className='appButton' onClick={UpdateProduct} >Update Product </button>
        </div>
    )
}
export default UpdateProduct;