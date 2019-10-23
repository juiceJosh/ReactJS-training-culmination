import React from 'react';
import './module.styles.scss'

const InputItem = ({ handleChange,submitProduct, name, description, img, price, quantity  }) => (
    <div className="container border mb-3">
        <img src={`${img}`} alt="" className="thumbnail col-3" />
        
        <input 
            type="text" 
            placeholder="Enter product name"
            className=" mr-2 mb-2 input" 
            name="name"
            onChange={handleChange} 
            value={name}
        />
                       
        <input 
            type="text" 
            className="input mr-2  mb-4"
            placeholder="Enter product description"
            name="description"
            onChange={handleChange} 
            value={description}
        />

        <input 
            type="text" 
            className="input mr-2  mb-4"
            placeholder="How much is it?"
            name="price"
            onChange={handleChange} 
            value={price}
        />

        <input 
            type="text" 
            className="input mr-2  mb-4"
            placeholder="How many do you want?"
            name="quantity"
            onChange={handleChange} 
            value={quantity}
        />

        <button type="button" className="login-btn" onClick={submitProduct}>Add to Cart</button>
    </div> 
)

export default InputItem