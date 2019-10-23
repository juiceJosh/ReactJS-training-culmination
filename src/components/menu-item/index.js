import React from 'react';
import './module.style.scss'

const MenuItem = ({ name, img, price, quantity, description, incrementCount, decrementCount }) => (
    <div className="menu-item">
        <img src={`${img}`} alt="" className="thumbnail col-3" />
        <h1 className='title col-3'>{name.toUpperCase()}</h1>
        <span className='subtitle col-3'>{description}</span>
        <span className='subtitle col-1'>$ {price}</span>
        <div className='subtitle col-2'>
            <button className="button" onClick={decrementCount}>-</button>
                {quantity}
            <button className="button" onClick={incrementCount}>+</button>
        </div>
    </div> 
)

export default MenuItem