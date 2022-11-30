import React from 'react';

const AddProduct = () => {

    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const[error, setError] = React.useState(false);



    const addProduct = async () => {

        if (!name || !price || !company || !category)
        {
            setError(true);
            return false;
        }


        console.warn(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);

        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);

    }


    return (
        <div className='product'>
            <h1>Add Product </h1>
            <input type="text" className='iB' value={name} placeholder='Enter Product Name' onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className='iP'>Enter valid name</span>}
            <input type="text" className='iB' value={price} placeholder='Enter Product Price' onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className='iP'>Enter valid price</span>}
            <input type="text" className='iB' value={category} placeholder='Enter Product category' onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category && <span className='iP'>Enter valid category</span>}
            <input type="text" className='iB' value={company} placeholder='Enter Product Company' onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className='iP'>Enter valid company</span>}
            <button className='appButton' onClick={addProduct} >Add Product </button>
        </div>
    )
}
export default AddProduct;