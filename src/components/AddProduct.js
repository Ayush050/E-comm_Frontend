import React from 'react'; 
import {useNavigate} from 'react-router-dom';  // it is used to navigate to the other page 
 
const AddProduct = () => {  
            const [name, setName] = React.useState('');
            const [price, setPrice] = React.useState('');
            const [category, setCategory] = React.useState('');
            const [company, setCompany] = React.useState('');  
            const[error,setError]=React.useState(false);
            const navigate=useNavigate();
            const addProduct=async()=>{   
                if(!name || !price || !category || !company){   // here it is used to check the all the fields are filled or not  
                    setError(true);
                    return false;       // if any of the field is empty/error then it will return false and not allow to add the product
                }

                const userId=JSON.parse(localStorage.getItem('user'))._id;  // it is used to get the user id from the local storage
                console.log(userId);
                 let result=await fetch("http://localhost:5000/add-product",{        // here it is used to send the data to the backend and this data is fetching from the frontend 
                     method:'POST',
                     body:JSON.stringify({name,price,category,company,userId}),
                     headers:{ 
                        "Content-Type":"application/json",
                    }, 
                    
                });  
                result=await result.json();                       // here it is used to convert the data into json format
                console.log(result); 
                // localStorage.setItem('product', JSON.stringify(result));      // here it is used to store the data in the local storage
                navigate('/');  
            }
             
            
      return (
        <div className='product'>
            <h1>Add Product</h1>
            <input className='inputBox' type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name} />
            {error && !name && <span className='invalid-input'>enter valid name</span>}
            <input className='inputBox' type="text" placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)} value={price} />
            {error && !price && <span className='invalid-input'>enter valid price</span>}
            <input className='inputBox' type="text" placeholder="Enter Product category" onChange={(e)=>setCategory(e.target.value)} value={category} />
            {error && !category && <span className='invalid-input'>enter valid category</span>}
            <input className='inputBox' type="text" placeholder="Enter Product company " onChange={(e)=>setCompany(e.target.value)} value={company} />
            {error && !company && <span className='invalid-input'>enter valid company</span>}
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div> 
      ) 

} 

export default AddProduct;